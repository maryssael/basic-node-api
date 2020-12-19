const knex = require('knex');
const mockDb = require('mock-knex');

const BaseSQLRepository = require('../../../src/domains/base/BaseSQLRepository');

const db = knex({
  client: 'pg'
});

mockDb.mock(db);
const tracker = mockDb.getTracker();

let repository;

describe('BaseSQLRepository', () => {
  beforeEach(() => {
    repository = new BaseSQLRepository({
      dbConnector: db,
      tableName: 'tableName'
    });

    tracker.install();
  });

  afterEach(() => {
    tracker.uninstall();
  });

  describe('get', () => {
    it('Should get all data from table', async () => {
      const dbResponse = [{ first_name: 'Gimli', last_name: 'Son of Gloin' }];

      tracker.on('query', (query, step) => {
        expect(step).toBe(1);
        expect(query.sql).toBe('select * from "tableName"');

        query.response(dbResponse);
      });

      const result = await repository.get({});

      expect(result).toEqual(dbResponse);
    });
  });

  describe('getById', () => {
    it('Should return row specified by id', async () => {
      const id = 2;
      const dbResponse = [{ first_name: 'Gimli', last_name: 'Son of Gloin' }];

      tracker.on('query', (query, step) => {
        expect(step).toBe(1);
        expect(query.sql).toBe('select * from "tableName" where "id" = $1');
        expect(query.bindings).toEqual([id]);

        query.response(dbResponse);
      });

      const result = await repository.getById({ id });

      expect(result).toEqual(dbResponse);
    });
  });

  describe('create', () => {
    it('Should insert data', async () => {
      const data = { first_name: 'Gandalf', last_name: 'the Gray' };
      const dbResponse = { ...data, id: 5 };

      tracker.on('query', (query, step) => {
        expect(step).toBe(1);
        expect(query.sql).toBe('insert into "tableName" ("first_name", "last_name") values ($1, $2) returning *');
        expect(query.bindings).toEqual([data.first_name, data.last_name]);

        query.response(dbResponse);
      });

      const result = await repository.create({ data });

      expect(result).toEqual(dbResponse);
    });
  });

  describe('update', () => {
    it('Should update data', async () => {
      const id = 5;
      const data = { first_name: 'Gandalf', last_name: 'the White' };
      const dbResponse = { ...data, id: 5 };

      tracker.on('query', (query, step) => {
        expect(step).toBe(1);
        expect(query.sql).toBe('update "tableName" set "first_name" = $1, "last_name" = $2 where "id" = $3 returning *');
        expect(query.bindings).toEqual([data.first_name, data.last_name, id]);

        query.response(dbResponse);
      });

      const result = await repository.update({ id, data });

      expect(result).toEqual(dbResponse);
    });
  });

  describe('delete', () => {
    it('Should delete row specified by id', async () => {
      const id = 2;
      const dbResponse = 1;

      tracker.on('query', (query, step) => {
        expect(step).toBe(1);
        expect(query.sql).toBe('delete from "tableName" where "id" = $1');
        expect(query.bindings).toEqual([id]);

        query.response(dbResponse);
      });

      await repository.delete({ id });
    });
  });
});
