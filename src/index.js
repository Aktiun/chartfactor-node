'use strict';

require('make-promises-safe'); // installs an 'unhandledRejection' handler
const path = require('path');
const _ = require('lodash');
let logFilePath = path.join(__dirname, '..', 'log', 'log.txt');

function buildFastify() {
    const fastify = require('fastify')({
        bodyLimit: 999999999,
        logger: {
            level: 'info',
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

    return fastify;
}

if (require.main === module) {
    buildFastify();
}

module.exports = buildFastify;
