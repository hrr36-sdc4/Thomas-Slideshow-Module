require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const knex = require('knex')(require('../knexfile'));

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/rooms/:listingId/', express.static(path.join(__dirname, '/../client/dist')));

// knex.initialize();

app.get('/rooms/:listingId/images', cors(), (req, res) => {
  knex.select().from('image').where('listing', req.params.listingId).orderBy('image_index')
    .then(images => res.send(JSON.stringify(images)));
});

app.post('/rooms/:listingId/images', cors(), (req, res) => {
  let newImageIndex;

  if (Object.keys(req.body).length) {
    knex('image').where({ listing: req.params.listingId }).max('image_index').first()
      .then((imageIndex) => {
        newImageIndex = imageIndex['max(`image_index`)'] + 1;
        return knex('image').insert({
          id: null,
          listing: req.params.listingId,
          image_index: newImageIndex,
          url: req.body.url,
          description: req.body.description,
        });
      })
      .then(() => {
        res.send('image saved');
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    res.send('no data received');
  }
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
