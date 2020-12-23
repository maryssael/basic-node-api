const BaseService = require('../../shared/base/BaseService');

class ExampleService extends BaseService {
  async exampleMethod(arg) {
    return this.repository.exampleMethod(arg);
  }
}

module.exports = ExampleService;
