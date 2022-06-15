const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "maletek2021",
    database: "tablas",
  },
  pool: { min: 0, max: 10 },
});

module.exports = knex;
