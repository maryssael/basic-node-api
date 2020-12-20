const BaseController = require('../../../src/domains/base/BaseController');

let req;
let res;

let controller;
let service;

describe('BaseController', () => {
  beforeEach(() => {
    service = {
      get: jest.fn().mockResolvedValue(),
      getById: jest.fn().mockResolvedValue(),
      create: jest.fn().mockResolvedValue(),
      update: jest.fn().mockResolvedValue(),
      delete: jest.fn().mockResolvedValue()
    };

    req = {
      body: {
        first_name: 'Legolas',
        last_name: 'Son of Thranduil'
      },
      params: {
        id: 2
      }
    };

    res = {
      status: jest.fn().mockResolvedValue(res),
      json: jest.fn().mockResolvedValue(),
      send: jest.fn().mockResolvedValue(),
      end: jest.fn().mockResolvedValue()
    };

    controller = new BaseController({ service });
  });

  describe('get', () => {
    it('Should call service.get', async () => {
      await controller.get(req, res);

      expect(service.get).toHaveBeenCalledTimes(1);
      expect(service.get).toHaveBeenCalledWith();
      expect(res.json).toHaveBeenCalledTimes(1);
      // expect results
    });
  });

  describe('getById', () => {
    it('Should call service.getById', async () => {
      await controller.getById(req, res);

      expect(service.getById).toHaveBeenCalledTimes(1);
      expect(service.getById).toHaveBeenCalledWith({ id: req.params.id });
      expect(res.json).toHaveBeenCalledTimes(1);
      // expect results
    });
  });

  describe('create', () => {
    it('Should call service.create', async () => {
      await controller.create(req, res);

      expect(service.create).toHaveBeenCalledTimes(1);
      expect(service.create).toHaveBeenCalledWith({ data: req.body });
      expect(res.json).toHaveBeenCalledTimes(1);
      // expect results
    });
  });

  describe('update', () => {
    it('Should call service.update', async () => {
      await controller.update(req, res);

      expect(service.update).toHaveBeenCalledTimes(1);
      expect(service.update).toHaveBeenCalledWith({ id: req.params.id, data: req.body });
      expect(res.json).toHaveBeenCalledTimes(1);
      // expect results
    });
  });

  describe('delete', () => {
    it('Should call service.delete', async () => {
      await controller.delete(req, res);

      expect(service.delete).toHaveBeenCalledTimes(1);
      expect(service.delete).toHaveBeenCalledWith({ id: req.params.id });
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(204);
    });
  });
});
