const ExampleRepository = require('../ExampleRepository');
const ExampleService = require('../ExampleService');
const ExampleController = require('../ExampleController');

const dbConnector = require('../../../db/knex');

function getExampleRepository(params = {}) {
  return new ExampleRepository({
    dbConnector: params.dbConnector || dbConnector,
    tableName: params.tableName || 'examples'
  });
}

function getExampleService(params = {}) {
  return new ExampleService({
    repository: params.repository || getExampleRepository(params)
  });
}

function getExampleController(params = {}) {
  return new ExampleController({
    service: params.service || getExampleService(params)
  });
}

module.exports = {
  getExampleController,
  getExampleService
};
