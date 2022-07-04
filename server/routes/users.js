//SignUp and login routes for users

const express = require('express');
const router = express.Router();

//getAllUser :

router.get('/', require('../controllers/users.js').getAllUsers)

