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
  let newId = undefined;
  let newImageIndex = undefined;

  knex('image').max('id').first()
    .then((id) => {
      newId = id['max(`id`)'] + 1;
      knex('image').where({ listing: req.params.listingId }).max('image_index').first()
        .then((imageIndex) => {
          newImageIndex = imageIndex['max(`image_index`)'] + 1;
          knex('image').insert({
            id: newId,
            listing: req.params.listingId,
            image_index: newImageIndex,
            url: req.body.url,
            description: req.body.description,
          })
            .then(() => {
              res.send('image saved');
            });
        });
    });
});

app.put('/rooms/:listingId/images/:imageIndex', cors(), (req, res) => {
  const { url, description } = req.body;
  knex('image')
    .where({
      listing: req.params.listingId,
      image_index: req.params.imageIndex,
    })
    .update({ url, description })
    .then(() => {
      res.send('image updated');
    });
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
