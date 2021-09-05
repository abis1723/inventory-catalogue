const { getProductsByType } =require('../services/products.service');
const { validateProcedureName, validateCriteria } =require('../validations/products.validates');
const { log } = require('../../../../logger/logger');

const productsByType = (req, res) => {

    const procName = validateProcedureName(req.params.type);
    const criteria = validateCriteria(req.params.criteria);

    getProductsByType(procName, criteria, (err, results) => {
      if (err) {
        log.error(`Error from getProductsByType: ${err}`);
        return;
      }
      if (!results) {
        return res.status(500).json({
          success: false,
          message: "product not found"
        });
      }
      return res.status(200).json({
        success: true,
        data: results
      });
    });
  };
  
  module.exports = {
    productsByType: productsByType
  };

