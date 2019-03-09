const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const knex = require('knex')(require('../knexfile'));
const dbutils = require('../db/dbutils');

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/rooms/:listingId/', express.static(path.join(__dirname, '/../client/dist')));

// knex.initialize();

app.get('/rooms/:listingId/images', cors(), (req, res) => {
  console.log('Heard a GET request');
  dbutils.fetchImages(req.params.listingId)
    .then(images => res.send(JSON.stringify(images)))
    .then(() => console.log('...images sent'))
    .catch(err => console.log('Database retrieval failed', err));
});

app.post('/rooms/:listingId/images', cors(), (req, res) => {
  res.send('');
});

app.put('/rooms/:listingId/images', cors(), (req, res) => {
  res.send('');
});

app.delete('/rooms/:listingId/images/:imageIndex', cors(), (req, res) => {
  knex('image')
    .where({
      listing: req.params.listingId,
      image_index: req.params.imageIndex,
    })
    .del()
    .then(() => {
      res.send('image deleted');
    });
});

app.listen(port);
console.log('Listening on port', port);
