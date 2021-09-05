const connectionPool = require('../dal/connection');

const executeProcedure = (procName, params, callBack) => {
    connectionPool.query(procName,[params],(error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  };

  module.exports = {
    executeProcedure: executeProcedure
  };