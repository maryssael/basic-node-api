class BaseSQLRepository {
  constructor({
    dbConnector,
    tableName
  }) {
    this.dbConnector = dbConnector;
    this.tableName = tableName;
  }

  async get({ tableName = this.tableName }) {
    const result = await this.dbConnector(tableName)
      .select('*');

    return result;
  }

  async getById({ id, tableName = this.tableName }) {
    const result = await this.dbConnector(tableName)
      .select('*')
      .where('id', id);

    return result;
  }

  async create({ data, tableName = this.tableName }) {
    const created = await this.dbConnector(tableName)
      .insert(data)
      .returning('*');

    return created;
  }

  async update({ id, data, tableName = this.tableName }) {
    const updated = await this.dbConnector(tableName)
      .where('id', id)
      .update(data)
      .returning('*');

    return updated;
  }

  async del({ id, tableName = this.tableName }) {
    const deleted = await this.dbConnector(tableName)
      .where('id', id)
      .del();

    return deleted;
  }
}

module.exports = BaseSQLRepository;
