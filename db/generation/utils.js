const fs = require('fs');

module.exports.stringify = (headers, records) => {
  let result = '';
  result += `${headers.join(',')}\n`;
  records.forEach((record) => {
    result += `${record.join(',')}\n`;
  });
  return result;
};

module.exports.getFileNames = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, fileNames) => {
      if (err) reject(err);
      resolve(fileNames);
    });
  });
};
