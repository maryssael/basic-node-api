class BaseController {
  constructor({
    service
  }) {
    this.service = service;
  }

  async get(req, res, next) {
    try {
      const result = await this.service.get();

      return res.json(result);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;

      const result = await this.service.getById({ id });

      return res.json(result);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async create(req, res, next) {
    try {
      const data = req.body;

      const result = await this.service.create({ data });

      return res.json(result);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;

      const result = await this.service.update({ id, data });

      return res.json(result);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async del(req, res, next) {
    try {
      const { id } = req.params;

      await this.service.del({ id });

      return res.status(204).end();
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

module.exports = BaseController;
