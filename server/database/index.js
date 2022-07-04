//DataBase Connection :

const mysql = require('mysql2');
const mysqlconfig = require('./config.js');
const connection = mysql.createConnection(mysqlconfig);

connection.connect((error)=>{
    if(err){
        console.log(error)
    }else{
    console.log("DataBase connected")
    }
    })

module.exports = connection