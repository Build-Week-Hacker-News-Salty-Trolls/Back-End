// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/saltiestdata.db3'
    },
    migration: {
      directory: "./migrations",
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
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
