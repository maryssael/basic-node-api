const BaseController = require('../../shared/base/BaseController');

class ExampleController extends BaseController {
  async exampleMethod(req, res) {
    try {
      const { arg } = req.body;

      const result = await this.service.exampleMethod(arg);

      return result;
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

module.exports = ExampleController;
