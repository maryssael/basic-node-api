const tableName = 'examples';

function migrateUp(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

function migrateDown(knex) {
  return knex.schema.dropTable(tableName);
}

exports.up = migrateUp;
exports.down = migrateDown;
