const seedListings = (knex, fileNum) => {
  const formattedRows = Array.from({ length: 1000000 }).map(() => ({ id: null }));
  return knex.batchInsert('listing', formattedRows, 10000).then(() => {
    console.log('seeded listing file:', fileNum);
  });
};

exports.seed = (knex) => {
  return knex('listing').del()
    .then(() => {
      const listingPromises = [];
      for (let i = 0; i <= 9; i++) {
        listingPromises.push(seedListings(knex, i));
      }
      return Promise.all(listingPromises);
    });
};
