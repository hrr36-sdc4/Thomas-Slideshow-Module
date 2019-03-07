const fs = require('fs');
const path = require('path');

module.exports.getRecords = (filePath) => {
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