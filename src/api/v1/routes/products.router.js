const express = require('express');
const router = express.Router();

const { productsByType } = require('../controllers/products.controller');

router.get('/product/:type/:criteria', productsByType);

module.exports = router;