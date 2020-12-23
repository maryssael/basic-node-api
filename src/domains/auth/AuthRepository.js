const BaseSQLRepository = require('../base/BaseSQLRepository');

class AuthRepository extends BaseSQLRepository {
  async getUserByUsername({ username }) {
    const result = await this.dbConnector(this.tableName)
      .select('*')
      .where('username', username);

    return result[0];
  }
}

module.exports = AuthRepository;
