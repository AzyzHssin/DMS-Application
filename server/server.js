//This is where we put our routes after completing them to test them in the thunder:

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const Port = 3001;

app.use("/", require("./routes/users.js"));

// to test ... use http://localhost:3001/market/get
//
app.use("/market", require("./routes/market.js"));

app.use("/getproduct", require("./routes/product.js"));

app.listen(Port, () => {
  console.log("Server is working on http://localhost:" + Port);
});
