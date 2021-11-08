const tap = require('tap')
const buildFastify = require('../src/index')
const { elasticDataSources } = require('./mock_data');

tap.test('POST `/getDatasources/` route', t => {
  t.plan(4)
  
  const fastify = buildFastify()
  
  // At the end of your tests it is highly recommended to call `.close()`
  // to ensure that all connections to external services get closed.
  t.tearDown(() => fastify.close())

  fastify.inject({
    method: 'POST',
    url: '/getDatasources/'
  }, (err, response) => {
    t.error(err);
    t.strictEqual(response.statusCode, 200);
    t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8');
    let respDataSources = JSON.parse(response.payload);

    t.deepEqual(respDataSources, elasticDataSources);  // the datasource are allwais returned in a different order
    t.strictEqual(respDataSources.length, elasticDataSources.length);
  })
})