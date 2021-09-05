require('dotenv').config({
    silent: true
});

const express = require('express');
const app = express();
const productRouter = require('./api/v1/routes/products.router');
const { APP } = require('../config/index');
const { log } = require('../logger/logger');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/api/v1', productRouter);

const server = app.listen(APP.app_port, () => {
    log.info(`server is running on port: ${APP.app_port}`)
});

module.exports = server;