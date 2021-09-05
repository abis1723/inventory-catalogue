const { procedureName } = require('../constants/products.constant')

const validateProcedureName = (procType) => {
    let procName = null;
    switch (procType) {
        case 'price':
            procName = procedureName.price;
            break;
        case 'attribute':
            procName = procedureName.attribute;
            break;
        case 'rating':
            procName = procedureName.rating;
            break;
        default:
            break;
    }
    return procName;
}

const validateCriteria = (criteria) => {
    let value = 0;
    switch (criteria) {
        case 'max':
        case 'fantastic':
            value = 1;
            break;
        case 'min':
            value = 0;
            break;
        default:
            break;
    }
    return value;
}

module.exports = {
    validateProcedureName: validateProcedureName,
    validateCriteria: validateCriteria
};

