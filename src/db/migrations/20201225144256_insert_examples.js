const tableName = 'examples';

const examples = [
  {
    name: 'Chill Penguin',
    special: 'Shotgun Ice'
  },
  {
    name: 'Spark Mandrill',
    special: 'Electric Spark'
  },
  {
    name: 'Armored Armadillo',
    special: 'Rolling Shield'
  },
  {
    name: 'Launch Octopus',
    special: 'Homing Torpedo'
  }
];

function migrateUp(knex) {
  return knex(tableName).insert(examples);
}

function migrateDown(knex) {
  return knex(tableName)
    .whereIn('name', [
      'Chill Penguin',
      'Spark Mandrill',
      'Armored Armadillo',
      'Launch Octopus'
    ])
    .del();
}

exports.up = migrateUp;
exports.down = migrateDown;
