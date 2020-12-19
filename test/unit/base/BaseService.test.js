const BaseService = require('../../../src/domains/base/BaseService');

let service;
let repository;

describe('BaseService', () => {
  beforeEach(() => {
    repository = {
      get: jest.fn().mockResolvedValue(),
      getById: jest.fn().mockResolvedValue(),
      create: jest.fn().mockResolvedValue(),
      update: jest.fn().mockResolvedValue(),
      delete: jest.fn().mockResolvedValue()
    };

    service = new BaseService({ repository });
  });

  describe('get', () => {
    it('Should call repository.get', async () => {
      await service.get();

      expect(repository.get).toHaveBeenCalledTimes(1);
      // expect(repository.get).toHaveBeenCalledWith();
      // expect results
    });
  });

  describe('getById', () => {
    it('Should call repository.getById', async () => {
      const id = 5;

      await service.getById({ id });

      expect(repository.getById).toHaveBeenCalledTimes(1);
      expect(repository.getById).toHaveBeenCalledWith({ id });
      // expect results
    });
  });

  describe('create', () => {
    it('Should call repository.create', async () => {
      const data = { first_name: 'Gandalf', last_name: 'the Grey' };

      await service.create({ data });

      expect(repository.create).toHaveBeenCalledTimes(1);
      expect(repository.create).toHaveBeenCalledWith({ data });
    });
  });

  describe('update', () => {
    it('Should call repository.update', async () => {
      const id = 2;
      const data = { first_name: 'Gandalf', last_name: 'the White' };

      await service.update({ id, data });

      expect(repository.update).toHaveBeenCalledTimes(1);
      expect(repository.update).toHaveBeenCalledWith({ id, data });
    });
  });

  describe('delete', () => {
    it('Should call repository.delete', async () => {
      const id = 2;

      await service.delete({ id });

      expect(repository.delete).toHaveBeenCalledTimes(1);
      expect(repository.delete).toHaveBeenCalledWith({ id });
    });
  });
});
