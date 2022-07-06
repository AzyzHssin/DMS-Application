//SignUp and login routes for users

const express = require("express");
const router = express.Router();

//getAllUser :

router.get("/get", require("../controllers/users.js").getAllUsers);

//SignUp:

router.post("/signup", require("../controllers/users.js").createNewUser);

//login :

router.post("/login", require("../controllers/users.js").login);

module.exports = router;
