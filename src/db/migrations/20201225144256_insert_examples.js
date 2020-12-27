const tableName = 'examples';

const examples = [
  {
    first_name: 'Chill',
    last_name: 'Penguin'
  },
  {
    first_name: 'Spark',
    last_name: 'Mandrill'
  },
  {
    first_name: 'Armored',
    last_name: 'Armadillo'
  },
  {
    first_name: 'Launch',
    last_name: 'Octopus'
  }
];

function migrateUp(knex) {
  return knex(tableName).insert(examples);
}

function migrateDown(knex) {
  return knex(tableName)
    .whereIn('first_name', [
      'Chill',
      'Spark',
      'Armored',
      'Launch'
    ])
    .del();
}

exports.up = migrateUp;
exports.down = migrateDown;
