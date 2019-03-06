const fs = require('fs');
const path = require('path');

const getRecords = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, filePath), 'utf8', (err, fileData) => {
      if (err) {
        reject(err);
      } else {
        const records = fileData.split('\n');
        resolve(records);
      }
    });
  });
};

const prepareListings = (knex, fileNum) => {
  return getRecords(`../generation/listing_records/listings${fileNum}.csv`)
    .then((listings) => {
      const formattedRows = listings.slice(1, -1).map(listing => ({ id: listing }));
      return knex.batchInsert('listing', formattedRows, 10000);
    });
};

exports.seed = (knex) => {
  return knex('listing').del()
    .then(() => {
      const listingPromises = [];
      for (let i = 0; i <= 9; i++) {
        listingPromises.push(prepareListings(knex, i));
      }
      return Promise.all(listingPromises);
    });
};
