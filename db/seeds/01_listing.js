
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('listing').del()
    .then(() => {
      // Inserts seed entries
      return knex('listing').insert([
        { id: 1 },
        { id: 2 },
      ]);
    });
};
