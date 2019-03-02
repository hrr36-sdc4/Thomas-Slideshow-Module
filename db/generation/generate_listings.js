const { stringify, saveRecords } = require('./utils');

const generateListingRecords = (n) => {
  let listings = [];
  let remaining = n;
  let currentId = 0;
  let counter = 0;

  while (remaining) {
    for (let i = 0; i < 1000000; i++) {
      listings.push([currentId]);
      currentId += 1;
      remaining -= 1;
    }
    const stringifiedListings = stringify(['id'], listings);
    saveRecords(`./listing_records/listings${counter}.csv`, stringifiedListings);
    counter += 1;
    listings = [];
  }
};

generateListingRecords(10000000);
