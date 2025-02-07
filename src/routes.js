'use strict';

const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const metadataGlobalConstraints = require('../etc/metadataConstraints.json');
const staticFilters = require('../etc/staticFilters.json');
const rawdata = fs.readFileSync(path.join(__dirname, '..', 'etc', 'providers.json'));
const providers = JSON.parse(rawdata);
const axios = require('axios');
const qs = require('qs');

// Supported providers
require('../cft/cftoolkit')

const cf = global.cf;

const auth = {};
const baseUrl = `${process.env.CF_AUTH_URL}/realms/${process.env.CF_AUTH_REALM}/`;

async function login() {
    try {
        let data = qs.stringify({
            'client_id': auth.clientId,
            'client_secret': auth.clientSecret,
            'grant_type': 'client_credentials',
            'scope': 'openid profile email'
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}protocol/openid-connect/token`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        const response = await axios.request(config);

        if (response.status !== 200) {
            return false;
        }

        const authInfo = response.data;

        auth.token = authInfo.access_token;

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

async function validateToken(request, reply) {
    try {

        if (!auth.token) {
            const loginResponse = await login();

            if (!loginResponse) {
                reply.code(401).send({ error: 'Unauthorized. Invalid or expired token.' });
                return;
            }
        }

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${baseUrl}protocol/openid-connect/userinfo`,
            headers: {
                'Authorization': `Bearer ${auth.token}`
            }
        };
        const response = await axios.request(config);

        if (response.status !== 200) {
            reply.code(401).send({ error: 'Unauthorized. Invalid or expired token.' });
            return;
        }

        const validateInfo = response.data;
        const isValid = validateInfo && validateInfo.preferred_username && validateInfo.preferred_username === `service-account-${auth.clientId}`;

        if (!isValid) {
            reply.code(401).send({ error: 'Invalid or expired token' });
        } else {
            request.user = validateInfo
        }

        return;
    } catch (e) {
        console.error(e);
        reply.code(401).send({ error: 'Error validating token' });
        return;
    }
}

const originalFactory = cf.log.methodFactory;

cf.log.methodFactory = function (methodName, logLevel, loggerName) {
    const rawMethod = originalFactory(methodName, logLevel, loggerName);

    return (...args) => {
        // Define the log file path
        const logFilePath = process.env.CF_LOG_PATH || path.join(__dirname, '..', 'log', 'chartfactor.log');

        if (!fs.existsSync(logFilePath)) {
            fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
            fs.writeFileSync(logFilePath, '');
        }

        // Append the log entry to the file
        const logMessage = `${new Date().toISOString()} ${methodName.toUpperCase()}: ${args.join(' ')}\n`;
        fs.appendFileSync(logFilePath, logMessage);

        // Write to the original `loglevel` output
        rawMethod(...args);
    };
};

// Apply the new method factory
cf.log.setLevel(cf.log.getLevel());

const ElasticProvider = require('../cft/cft-elasticsearch-provider');
const RedshiftProvider = require('../cft/cft-redshift-provider');
const BigQueryProvider = require('../cft/cft-google-bigquery-provider');
const DataBricksProvider = require('../cft/cft-databricks-provider');

const providerInstances = {};
const ProviderTypeMap = {
    'elasticsearch': ElasticProvider,
    'redshift': RedshiftProvider,
    'google-bigquery': BigQueryProvider,
    'databricks': DataBricksProvider
};

providers.forEach(p => {
    if (p.provider === 'databricks') {
        const file = fs.readFileSync(`${process.cwd()}/${p.file}`, 'utf8');
        const fileConf = JSON.parse(file);

        p.token = fileConf.token;
    }
    providerInstances[p.name] = new ProviderTypeMap[p.provider](p);
});

const applyMetadataGlobalConstraints = result => {
    if (metadataGlobalConstraints[result.name]) {
        const toRemove = metadataGlobalConstraints[result.name].remove;

        if (Array.isArray(toRemove)) {
            result.objectFields = result.objectFields.filter((f) => !toRemove.includes(f.name));
        }
    }
};

const addFiltersToQuery = (queryConfig) => {
    let source = `${queryConfig.source.provider}::${queryConfig.source.name}`;

    if (staticFilters[source]) {
        staticFilters[source].forEach((f) => {
            queryConfig.config.filters.push(f);
        });
    }
}

async function routes(fastify, options) {
    fastify.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
        try {
            let json = JSON.parse(body);

            done(null, json);
        } catch (err) {
            err.statusCode = 400;
            done(err, undefined);
        }
    });

    fastify.post('/providers/', {preHandler: validateToken}, async (request, reply) => {
        return providers.map(p => {
            return {
                id: p.name,
                name: p.name,
                provider: p.provider,
                type: 'CONTAINER'
            };
        });
    });

    fastify.post('/setPAT/', async (request, reply) => {
        let resp = null;
        let config = request.body;

        // config.PAT and config.clientId is required
        if (!config || !config.PAT || !config.clientId) {
            reply.code(417).type('text/html').send('Expectation Failed. PAT and clientId are required.');
            return null;
        }

        auth.token = null;
        auth.clientId = config.clientId;
        auth.clientSecret = config.PAT;

        if (await login()) {
            reply.code(200);
            resp = true;
        } else {
            reply.code(401).type('text/html').send('Unauthorized');
            resp = false;
        }
        return resp;
    });

    fastify.post('/visualize/', {preHandler: validateToken}, async (request, reply) => {
        let resp = null;
        let queryConfig = request.body;

        if (!queryConfig) {
            reply.code(417).type('text/html').send('Expectation Failed. Query config is required.');
            return null;
        }

        addFiltersToQuery(queryConfig);

        try {
            resp = await providerInstances[queryConfig.source.provider]
                .visualize(queryConfig);
        } catch (err) {
            console.error(err);
            return err;
        }
        return resp;
    });

    fastify.post('/addCFNodeSource/', async (request, reply) => {
        let queryConfig = request.body;

        if (!queryConfig || !queryConfig.sourceName || !queryConfig.sourceConfig) {
            reply.code(417).type('text/html').send('Expectation Failed. sourceName and sourceConfig are required.');
            return null;
        }

        try {
            providerInstances[queryConfig.source]
                .addSourceMetaData(queryConfig.sourceName, queryConfig.sourceConfig);
        } catch (err) {
            console.error(err);
            return err;
        }
        reply.code(200)
        return true;
    });

    fastify.post('/runCountQuery/', {preHandler: validateToken}, async (request, reply) => {
        let countQuery = request.body;

        if (!countQuery) {
            reply.code(417).type('text/html').send('Expectation Failed. Count query config is required.');
            return null;
        }

        addFiltersToQuery(countQuery);

        try {
            let resp = await providerInstances[countQuery.source.provider]
                .runCountQuery(countQuery);

            return resp;
        } catch (err) {
            console.error(err);
            return err;
        }
    });

    fastify.post('/runRawQuery/', {preHandler: validateToken}, async (request, reply) => {
        let def = request.body.definition;

        if (!def) {
            reply.code(417).type('text/html').send('Expectation Failed. Query definition (definition) is required.');
            return null;
        }

        addFiltersToQuery(def);

        try {
            let resp = await providerInstances[def.source.provider]
                .runRawQuery(def, request.body.params, request.body.sortModel);

            return resp;
        } catch (err) {
            console.error(err);
            return err;
        }
    });

    fastify.post('/getConfigParameters/', {preHandler: validateToken}, async (request, reply) => {
        let provider = request.body.provider;

        if (!provider) {
            reply.code(417).type('text/html').send('Expectation Failed. Provider type (provider) is required.');
            return null;
        }

        try {
            return ProviderTypeMap[provider].getConfigParameters();
        } catch (err) {
            console.error(err);
            return err;
        }
    });

    fastify.post('/getDatasources/', {preHandler: validateToken}, async (request, reply) => {
        let provider = request.body.provider;

        try {
            let result = await providerInstances[provider].getDatasources();

            result.providerType = providerInstances[provider]._providerCfg.provider;

            return result;
        } catch (err) {
            console.error(err);
            return err;
        }
    });

    fastify.post('/getDatasource/', {preHandler: validateToken}, async (request, reply) => {
        let provider = request.body.provider;
        let ds = request.body.name;
        let result = null;

        if (!ds) {
            reply.code(417).type('text/html').send('Expectation Failed. Data source name (name) is required.');
            return null;
        }

        try {
            if (!provider) {
                result = {
                    id: ds,
                    name: ds,
                    type: 'CONTAINER'
                };

            } else {
                result = await providerInstances[provider].getDatasource(ds);

                if (result.name.indexOf('::') === -1) {
                    result.id = `${provider}::${result.id}`;
                    result.name = `${provider}::${result.name}`;
                }
                result.providerType = providerInstances[provider]._providerCfg.provider;

                applyMetadataGlobalConstraints(result);
            }

            return result;
        } catch (err) {
            console.error(err);
            return err;
        }
    });

    fastify.post('/getDatasourceById/', {preHandler: validateToken}, async (request, reply) => {
        let datasourceName = request.body.name;

        if (!datasourceName) {
            reply.code(417).type('text/html').send('Expectation Failed. Data source name (name) is required.');
            return null;
        }

        let composedDS = datasourceName.split('::');
        let isComposed = composedDS.length > 1;
        let provider = isComposed ? composedDS[0] : request.body.provider;
        let dsId = isComposed ? composedDS[1] : datasourceName;

        try {
            let result = null;

            if (!provider) {
                result = await providerInstances[dsId].getDatasources();

                result.forEach(ds => {
                    if(!_.startsWith(ds.id, `${dsId}::`)) {
                        ds.id = `${dsId}::${ds.id}`;
                        ds.name = `${dsId}::${ds.name}`;
                    }
                    ds.providerType = providerInstances[dsId]._providerCfg.provider;
                });
            } else {
                result = await providerInstances[provider].getDatasourceById(dsId);

                result.forEach(ds => {
                    if(!_.startsWith(ds.id, `${provider}::`)) {
                        ds.id = `${provider}::${ds.id}`;
                        ds.name = `${provider}::${ds.name}`;
                    }
                    ds.providerType = providerInstances[provider]._providerCfg.provider;
                });
            }

            applyMetadataGlobalConstraints(result);
            return result;
        } catch (err) {
            console.error(err);
            return err;
        }
    });

}

module.exports = routes;
