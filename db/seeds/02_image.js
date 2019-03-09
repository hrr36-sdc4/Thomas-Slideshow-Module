const { getRecords } = require('../seed_utils');


const prepareImages = (fileNum) => {
  const formattedRows = [];
  return getRecords(`./generation/image_records/images${fileNum}.csv`)
    .then((images) => {
      images.slice(1, -1).forEach((image) => {
        const fields = image.split(',');
        const formattedRow = {
          id: Number(fields[0]),
          listing: Number(fields[1]),
          image_index: Number(fields[2]),
          url: fields[3],
          description: fields[4],
        };
        formattedRows.push(formattedRow);
      });
      return formattedRows;
    });
};

const seedImages = (knex, fileNum) => {
  return prepareImages(fileNum).then((rows) => {
    return knex.batchInsert('image', rows, 10000);
  });
};

exports.seed = (knex) => {
  return knex('image').del()
    .then(async () => {
      let currentFileNum = 0;
      while (currentFileNum < 1000) {
        await seedImages(knex, currentFileNum);
        console.log('seeded image file:', currentFileNum);
        currentFileNum += 1;
      }
    });
};
