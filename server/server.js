//This is where we put our routes after completing them to test them in the thunder:

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const Port = 3001;

//To test the logiin and signup you have to put the right path like this : (http://localhost:3001/users/signup) (http://localhost:3001/users/login)

app.use("/users", require("./routes/users.js"));

//To test in thunder you have to put the path of server.js+ path routes.js like this (http://localhost:3001/market/get) (http://localhost:3001/market/create) (http://localhost:3001/market/update)

app.use("/market", require("./routes/market.js"));

//To test in thunder you have to put the path of server.js + the path that exist in routes like this (http://localhost:3001/getproduct/get)
app.use("/product", require("./routes/product.js"));

app.listen(Port, () => {
  console.log("Server is working on http://localhost:" + Port);
});
