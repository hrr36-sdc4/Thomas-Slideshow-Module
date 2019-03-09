const db = require('./index.js');

module.exports.fetchImages = (listingID) => {
  return db.from('image').select('*').where('listing', '=', listingID).orderBy('index');
};
