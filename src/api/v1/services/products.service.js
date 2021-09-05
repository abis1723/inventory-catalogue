
 const { executeProcedure } = require('../middlewares/products')

const getProductsByType = (procName, type, callBack) => {
    return executeProcedure(procName,[parseInt(type)],callBack); 
  }

    module.exports = {
    getProductsByType: getProductsByType
  };