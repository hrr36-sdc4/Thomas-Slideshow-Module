const knex = require('knex')(require('../knexfile'));

module.exports = knex;

module.exports.initialize = () => {
  knex.migrate.latest()
    .then(() => {
      return knex.seed.run();
    });
};
