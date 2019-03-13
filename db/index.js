const knex = require('knex')(require('../knexfile'));

const initialize = () => {
  return knex.migrate.latest()
    .then(() => {
      return knex.seed.run()
        .then(() => {
          console.log('database seeded');
          process.exit();
        });
    });
};

initialize();
