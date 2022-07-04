//this are the user routes fro creating his market :

const express = require('express');
const router = express.Router();

//Creating market :
router.post('/create', require('../controllers/market.js').createMarket);

module.exports = router;