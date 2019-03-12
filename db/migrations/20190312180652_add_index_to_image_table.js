
exports.up = (knex) => {
  return knex.schema.table('image', (table) => {
    table.index('listing');
  });
};

exports.down = (knex) => {
  return knex.schema.table('image', (table) => {
    table.dropIndex('listing');
  });
};
