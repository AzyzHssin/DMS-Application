//SignUp and login routes for users

const express = require('express');
const router = express.Router();

//getAllUser :

router.get('/', require('../controllers/users.js').getAllUsers)

//login :
 router.post('/login', require('../controllers/users.js').login)

//SignUp:
 router.post('/sign', require('../controllers/users.js').createNewUser) 

module.exports = router;