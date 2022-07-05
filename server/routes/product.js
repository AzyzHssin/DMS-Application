const express = require('express');
const router = express.Router();

router.get('/get', require('../controllers/product.js').getProduct);

module.exports = router