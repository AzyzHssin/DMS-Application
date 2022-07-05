//this are the user routes fro creating his market :

const express = require('express');
const router = express.Router();

//Creating market :

router.post('/create', require('../controllers/market.js').createMarket);

//get only the markets that belong to the user:

router.get('/get',require('../controllers/market.js').getMarket);

module.exports = router;