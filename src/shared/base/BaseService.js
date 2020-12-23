class BaseService {
  constructor({
    repository
  }) {
    this.repository = repository;
  }

  async get() {
    return this.repository.get({});
  }

  async getById({ id }) {
    return this.repository.getById({ id });
  }

  async create({ data }) {
    return this.repository.create({ data });
  }

  async update({ id, data }) {
    return this.repository.update({ id, data });
  }

  async del({ id }) {
    return this.repository.del({ id });
  }
}

module.exports = BaseService;
