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

module.exports.getFileNames = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, fileNames) => {
      if (err) reject(err);
      resolve(fileNames);
    });
  });
};
