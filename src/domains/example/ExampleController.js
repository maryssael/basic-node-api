const BaseController = require('../../shared/base/BaseController');

class ExampleController extends BaseController {
  async exampleMethod(req, res, next) {
    try {
      const { arg } = req.body;

      const result = await this.service.exampleMethod(arg);

      return result;
    } catch (err) {
      return this.errorHandler(err, req, res, next);
    }
  }
}

module.exports = ExampleController;
