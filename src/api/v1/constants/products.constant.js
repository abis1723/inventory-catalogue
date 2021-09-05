const procedureName = {
    "price": "call usp_getProductsByPrice(?)", 
    "attribute": "call usp_getProductsByAttribute(?)",
    "rating": "call usp_getProductsByRating(?)"
}
Object.freeze(procedureName);

module.exports = {
    procedureName: procedureName
};