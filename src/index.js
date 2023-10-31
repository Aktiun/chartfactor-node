'use strict';

const { ClientRequestInterceptor } = require('@mswjs/interceptors/lib/interceptors/ClientRequest');
require('make-promises-safe'); // installs an 'unhandledRejection' handler
const path = require('path');
const _ = require('lodash');
let logFilePath = path.join(__dirname, '..', 'log', 'log.txt');
require('dotenv').config();

function buildFastify() {
    const fastify = require('fastify')({
        bodyLimit: 999999999,
        logger: {
            level: process.env.LOG_LEVEL || 'info',
            file: logFilePath
        }
    });

    fastify.register(require('fastify-cors'), {
        origin: '*'
    });

    fastify.register(require('./routes'));

    fastify.listen(3123, "0.0.0.0", function (err, address) {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }
        fastify.log.info(`server listening on ${address}`);
    });

    console.log('log level: ', process.env.LOG_LEVEL);
    if (process.env.LOG_LEVEL === 'debug') {
        const interceptor = new ClientRequestInterceptor()
        interceptor.apply();
        interceptor.on('response', (response, request) => {
            const headers = {
                'User-Agent': request.headers.get('User-Agent'),
                'Content-Type': request.headers.get('Content-Type'),
                'Accept': request.headers.get('Accept'),
                'Accept-Encoding': request.headers.get('Accept-Encoding')
            };
            const reqJson = {
                method: request.method,
                url: request.url,
                headers: headers,
            };
            fastify.log.debug(`******* external request *******`);
            fastify.log.debug(reqJson);
        })
    }

    return fastify;
}

if (require.main === module) {
    buildFastify();
}

module.exports = buildFastify;
