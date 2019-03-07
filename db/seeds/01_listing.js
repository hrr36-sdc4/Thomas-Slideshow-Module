const { getRecords } = require('../seed_utils');

const seedListings = (knex, fileNum) => {
  return getRecords(`./generation/listing_records/listings${fileNum}.csv`)
    .then((listings) => {
      const formattedRows = listings.slice(1, -1).map(listing => ({ id: Number(listing) }));
      console.log('preparing listing file:', fileNum);
      return knex.batchInsert('listing', formattedRows, 10000).then(() => {
        console.log('seeded listing file:', fileNum);
      });
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
