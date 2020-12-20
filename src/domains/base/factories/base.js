const Repository = require('../BaseSQLRepository');
const Service = require('../BaseService');
const Controller = require('../BaseController');

const dbConnector = require('../../../db/knex');

function getBaseRepository(params = {}) {
  return new Repository({
    dbConnector: params.dbConnector || dbConnector,
    tableName: params.tableName || 'tbl_test'
  });
}

function getBaseService(params = {}) {
  return new Service({
    repository: params.repository || getBaseRepository()
  });
}

function getBaseController(params = {}) {
  return new Controller({
    service: params.service || getBaseService()
  });
}

module.exports = {
  getBaseController,
  getBaseService
};
