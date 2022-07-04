const express = require('express');
const router = express.Router();

router.get('/product', require('../controllers/product.js').getAllProduct)
