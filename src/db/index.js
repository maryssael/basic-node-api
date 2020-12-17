const db = require('knex')({
  client: 'pg',
  connection: {
    user: 'gui',
    host: 'localhost',
    database: 'test',
    password: 'password',
    port: 5432
  }
});

module.exports = db;
