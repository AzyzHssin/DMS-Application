//this are the user routes fro creating his market :

const express = require('express');
const router = express.Router();

//Creating market :

router.post('/create', require('../controllers/market.js').createMarket);

//get only the markets that belong to the user:

router.get('/get',require('../controllers/market.js').getMarket);

//Update the market :

 router.patch('/update', require('../controllers/market.js').update);

 //Delete the market :

 router.delete('/delete', require('../controllers/market.js').delete);

 
module.exports = router;