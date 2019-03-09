
exports.up = (knex) => {
  return knex.schema.table('image', (table) => {
    table.renameColumn('index', 'image_index');
  });
};

exports.down = (knex) => {
  return knex.schema.table('image', (table) => {
    table.renameColumn('image_index', 'index');
  });
};
