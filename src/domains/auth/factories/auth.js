const AuthRepository = require('../AuthRepository');
const AuthService = require('../AuthService');
const AuthController = require('../AuthController');

const dbConnector = require('../../../db/knex');

const authRepository = new AuthRepository({
  dbConnector,
  tableName: 'users'
});

const authService = new AuthService({
  repository: authRepository
});

const authController = new AuthController({
  service: authService
});

module.exports = { authController };
