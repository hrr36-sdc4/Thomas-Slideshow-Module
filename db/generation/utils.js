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

module.exports.getCurrentId = () => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path.join(__dirname, 'currentId.txt'))) {
      fs.writeFile(path.join(__dirname, 'currentId.txt'), '0', (err) => {
        if (err) reject(err);
        resolve(0);
      });
    } else {
      fs.readFile(path.join(__dirname, 'currentId.txt'), 'utf8', (err, id) => {
        if (err) reject(err);
        console.log('current id:', id);
        resolve(Number(id));
      });
    }
  });
};

module.exports.saveCurrentId = (id) => {
  fs.writeFile('./currentId.txt', id, (err) => {
    if (err) throw err;
    console.log('saved current id:', id);
  });
};
