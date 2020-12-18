class BaseSQLRepository {
  constructor({
    dbConnector,
    tableName
  }) {
    this.dbConnector = dbConnector;
    this.tableName = tableName;
  }

  async create({ data, tableName = this.tableName }) {
    const created = await this.dbConnector(tableName)
      .insert(data)
      .returning('*');

    return created;
  }
}

module.exports = BaseSQLRepository;
