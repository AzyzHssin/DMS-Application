const express = require("express");
const router = express.Router();

router.get("/getproduct", require("../controllers/product.js").getProduct);

module.exports = router;
