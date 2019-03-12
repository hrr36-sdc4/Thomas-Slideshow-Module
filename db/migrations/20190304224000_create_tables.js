
exports.up = (knex) => {
  return knex.schema.createTable('listing', (table) => {
    table.increments('id');
  }).then(() => {
    return knex.schema.createTable('image', (table) => {
      table.increments('id');
      table.integer('listing');
      table.integer('image_index');
      table.string('url');
      table.string('description');
    });
  });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('image')
    .dropTableIfExists('listing');
};
