class BaseService {
  constructor({
    repository
  }) {
    this.repository = repository;
  }

  async get() {
    return this.repository.get();
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

  async delete({ id }) {
    return this.repository.delete({ id });
  }
}

module.exports = BaseService;
