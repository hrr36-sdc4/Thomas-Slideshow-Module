const path = require('path');
const faker = require('faker');
const { getFileNames, stringify, saveRecords } = require('./utils');

let imageFilenames = [];

const generateImageRecord = (id, listingId, index) => {
  const randomIndex = Math.floor(Math.random() * imageFilenames.length);
  const randomImageFilename = imageFilenames[randomIndex];
  const url = `https://s3.amazonaws.com/sdc4-slideshow/${randomImageFilename}`;
  const description = faker.lorem.sentences();

  return [id, listingId, index, url, description];
};

const generateImageRecords = (n) => {
  let images = [];
  let remaining = n;
  let currentId = 0;
  let currentListingId = 0;
  let counter = 0;

  getFileNames(path.join(__dirname, 'stock_photos'))
    .then((fileNames) => {
      imageFilenames = fileNames;
      while (remaining) {
        for (let i = 0; i < 1000000; i++) {
          images.push(generateImageRecord(currentId, currentListingId, 0));
          currentId += 1;
          currentListingId += 1;
          remaining -= 1;
        }
        const stringifiedImages = stringify(['id', 'listingId', 'index', 'url', 'description'], images);
        saveRecords(`images${counter}.csv`, stringifiedImages);
        counter += 1;
        images = [];
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

generateImageRecords(1000000);
