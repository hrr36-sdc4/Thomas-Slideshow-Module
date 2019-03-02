const fs = require('fs');
const path = require('path');
const { getFileNames } = require('./utils');

let images = [];

getFileNames(path.join(__dirname, 'stock_photos'))
  .then((files) => {
    images = files;
    console.log(images);
  })
  .catch((err) => {
    console.error(err);
  });
