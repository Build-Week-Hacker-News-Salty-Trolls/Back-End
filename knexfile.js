// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'test',
      user:     'postgres',
      password: 'Holly602'
    },
    migration: {
      directory: "./migrations",
      tableName: 'knex_migrations'
    },
   seeds: {
      directory: "./seeds",
  },
},



  production: {
    client: 'pg',
    connection: {
      database: 'Hackernews',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
