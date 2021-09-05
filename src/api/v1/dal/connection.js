
const { createPool } = require('mysql2');
const { DB } = require('../../../../config/index');
const { log } = require('../../../../logger/logger');

const connectionPool = createPool(DB);

connectionPool.getConnection((err) => {
    if (!err) {
        log.info('connected');
    }
    else {
        log.error(`Connection Failed: ${err}`);
    }

});

module.exports = connectionPool;
