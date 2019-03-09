const path = require('path');
const faker = require('faker');
const { getCurrentId, getFileNames, stringify, saveRecords, saveCurrentId } = require('./utils');

let imageFilenames = [];
const args = process.argv.slice(2).map(Number);

const generateImageRecord = (id, listingId, index) => {
  const randomIndex = Math.floor(Math.random() * imageFilenames.length);
  const randomImageFilename = imageFilenames[randomIndex];
  const url = `https://s3.amazonaws.com/sdc4-slideshow/${randomImageFilename}`;
  const description = faker.lorem.sentence();

  return [id, listingId, index, url, description];
};

const generateImageRecords = (n, startingId, fileNum) => {
  let images = [];
  let remaining = n;
  let currentId;
  let currentListingId = startingId;
  let counter = fileNum;

  getCurrentId()
    .then((id) => {
      currentId = id;
    })
    .then(() => {
      getFileNames(path.join(__dirname, 'stock_photos'))
        .then((fileNames) => {
          imageFilenames = fileNames;
          while (remaining) {
            for (let i = 0; i < 10000; i++) {
              // generate 5-10 images per listing
              const randomAmount = 5 + Math.floor(Math.random() * 6);
              for (let j = 0; j < randomAmount; j++) {
                images.push(generateImageRecord(currentId, currentListingId, j));
                currentId += 1;
              }
              currentListingId += 1;
              remaining -= 1;
            }
            const stringifiedImages = stringify(['id', 'listing', 'image_index', 'url', 'description'], images);
            saveRecords(`./image_records/images${counter}.csv`, stringifiedImages);
            counter += 1;
            images = [];
          }
          saveCurrentId(currentId);
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
};

generateImageRecords(100000, args[0], args[1]);
