const BaseController = require('../../shared/base/BaseController');

class AuthController extends BaseController {
  async signup(req, res, next) {
    try {
      const data = req.body;

      const result = await this.service.signup({ data });

      return res.status(201).json(result);
    } catch (err) {
      return this.errorHandler(err, req, res, next);
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;

      const result = await this.service.login({ username, password });

      return res.json(result);
    } catch (err) {
      return this.errorHandler(err, req, res, next);
    }
  }
}

module.exports = AuthController;
