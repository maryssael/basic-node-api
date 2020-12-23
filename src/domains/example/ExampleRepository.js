const BaseRepository = require('../../shared/base/BaseSQLRepository');

class ExampleRepository extends BaseRepository {
  async exampleMethod(arg) {
    const result = await this.dbConnector
      .select('*')
      .where('arg', arg);

    return result;
  }
}

module.exports = ExampleRepository;
