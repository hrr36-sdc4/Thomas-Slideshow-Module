const fs = require('fs');
const { stringify } = require('./utils');

const saveListings = (fileName, data) => {
  fs.writeFile(`./db/generation/${fileName}`, data, (err) => {
    if (err) throw err;
    console.log('file saved');
  });
};

const generateListingIds = (n) => {
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
    saveListings(`listings${counter}.csv`, stringifiedListings);
    counter += 1;
    listings = [];
  }
};

generateListingIds(10000000);
