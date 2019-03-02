const path = require('path');
const faker = require('faker');
const { getFileNames, stringify, saveRecords } = require('./utils');

let imageFilenames = [];

const generateImageRecord = (id, listingId, index) => {
  const randomIndex = Math.floor(Math.random() * imageFilenames.length);
  const randomImageFilename = imageFilenames[randomIndex];
  const url = `https://s3.amazonaws.com/sdc4-slideshow/${randomImageFilename}`;
  const description = faker.lorem.sentence();

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
        for (let i = 0; i < 10000; i++) {
          // generate at least 5 images per listing
          const randomAmount = 5 + Math.floor(Math.random() * 6);
          for (let j = 0; j < randomAmount; j++) {
            images.push(generateImageRecord(currentId, currentListingId, j));
            currentId += 1;
          }
          currentListingId += 1;
          remaining -= 1;
        }
        const stringifiedImages = stringify(['id', 'listingId', 'index', 'url', 'description'], images);
        saveRecords(`./image_records/images${counter}.csv`, stringifiedImages);
        counter += 1;
        images = [];
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

generateImageRecords(100000);
