const tableName = 'users';

function migrateUp(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

function migrateDown(knex) {
  return knex.schema.dropTable(tableName);
}

exports.up = migrateUp;
exports.down = migrateDown;
