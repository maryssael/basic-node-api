const knex = require('knex');
const mockDb = require('mock-knex');

const BaseSQLRepository = require('../../../src/domains/base/BaseSQLRepository');

const db = knex({
  client: 'pg'
});

mockDb.mock(db);

let repository;

describe('BaseSQLRepository', () => {
  beforeEach(() => {
    repository = new BaseSQLRepository({
      dbConnector: db,
      tableName: 'tableName'
    });
  });

  describe('create', () => {
    it('Should insert data', async () => {
      const tracker = mockDb.getTracker();
      tracker.install();

      const data = { first_name: 'Gandalf', last_name: 'the White' };

      tracker.on('query', (query, step) => {
        expect(step).toBe(1);
        expect(query.sql).toBe('insert into "tableName" ("first_name", "last_name") values ($1, $2) returning *');
        expect(query.bindings).toEqual([data.first_name, data.last_name]);

        query.response({ ...data, id: 1 });
      });

      const result = await repository.create({ data });

      expect(result).toEqual({ ...data, id: 1 });

      tracker.uninstall();
    });
  });
});
