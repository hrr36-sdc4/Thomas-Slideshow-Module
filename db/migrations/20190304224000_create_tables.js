
exports.up = function (knex, Promise) {
  return knex.schema.createTable('listing', (table) => {
    table.integer('id').primary();
  }).then(() => {
    return knex.schema.createTable('image', (table) => {
      table.integer('id').primary();
      table.integer('listing');
      table.integer('index');
      table.string('url');
      table.string('description');
    });
  });
};

exports.down = function (knex, Promise) {
  return knex.schema
  .dropTableIfExists('image')
  .dropTableIfExists('listing');
};
