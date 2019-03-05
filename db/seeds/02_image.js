
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('image').del()
    .then(() => {
      // Inserts seed entries
      return knex('image').insert([
        { id: 1, listing: '1', index: '0', url: 'http://google.com', description: 'asdf' },
      ]);
    });
};
