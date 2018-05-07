exports.up = function(knex, Promise) {
  return knex.schema.createTable('resolutions', (table) => {
    table.increments('id')
    table.text('dueDate')
    table.text('resolution')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resolutions')
};
