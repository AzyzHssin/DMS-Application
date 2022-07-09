// this is a middlware function basicly what it does it intercepts requests and checks if the token send with the request is vqlid or not 
const jwt = require('jsonwebtoken');
const tokenSecret = require ('../config/authConfig')
// Auth middleware

module.exports = (req,res,next)=> {
    const token = req.headers["cookie"]
    if(!token){
      res.redirect('/signin')
    }
    else{
    jwt.verify(token,tokenSecret.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err){
           res.redirect('/login')
        }
        else{
         req.user = user
         next();
        }
    })}
    }