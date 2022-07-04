const jwt = require('jsonwebtoken');
const secret = require('../config/authConfig.js');

module.exports = function (userObject){
    jwt.sign(userObject,secret,(err,result)=>{
        if(err) throw err;
        else return result
    })
 }