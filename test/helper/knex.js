const knex = require('knex');
const mockKnex = require('mock-knex');

const tracker = mockKnex.getTracker();
const mockDb = knex({
  client: 'pg'
});

mockKnex.mock(mockDb);

module.exports = { mockDb, tracker };
