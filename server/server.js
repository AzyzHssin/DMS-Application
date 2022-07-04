//This is where we put our routes after completing them to test them in the thunder:

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const Port = 3000

app.use('/users', require('./routes/users.js'));


app.listen(Port,() =>{
    console.log('Server is working on http://localhost:'+Port);
});