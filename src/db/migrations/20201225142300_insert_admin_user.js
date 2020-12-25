const tableName = 'users';

function migrateUp(knex) {
  return knex(tableName).insert({
    username: 'admin',
    password: 'password'
  });
}

function migrateDown(knex) {
  return knex(tableName)
    .where('username', 'admin')
    .del();
}

exports.up = migrateUp;
exports.down = migrateDown;
