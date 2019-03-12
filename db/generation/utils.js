const fs = require('fs');
const path = require('path');

module.exports.stringify = (headers, records) => {
  let result = '';
  result += `${headers.join(',')}\n`;
  records.forEach((record) => {
    result += `${record.join(',')}\n`;
  });
  return result;
};

module.exports.saveRecords = (fileName, data) => {
  fs.writeFile(path.join(__dirname, fileName), data, (err) => {
    if (err) throw err;
    console.log(`${fileName} saved.`);
  });
};

module.exports.getPhotos = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'photos.txt'), 'utf8', (err, photos) => {
      if (err) reject(err);
      const listOfPhotos = photos.split('\n');
      resolve(listOfPhotos);
    });
  });
};
