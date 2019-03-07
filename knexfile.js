module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    database: 'HoneyJAR',
  },
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
};
