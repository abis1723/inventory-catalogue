
config = require('config');

/* Database env variables */
const DB = {
  host: process.env.DB_HOST || config.get("DB.DB_HOST"),
  user: process.env.DB_USER || config.get("DB.DB_USER"),
  password: process.env.DB_PASSWORD || config.get("DB.DB_PASSWORD"),
  database: process.env.DB_NAME || config.get("DB.DB_NAME"),
  port: process.env.DB_PORT || config.get("DB.DB_PORT"),
  waitForConnections: true,
  connectionLimit: 10
};

const APP = {
  app_port: process.env.APP_PORT || config.get("DB.APP_PORT")
};

module.exports = {
  DB: DB,
  APP: APP
};




