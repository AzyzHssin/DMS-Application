const bcrypt =  require ('bcrypt')

 module.exports = {
  hashPassword: function (password, saltRounds) {
     bcrypt.genSalt(saltRounds,function(err,salt){
      bcrypt.hash(password,salt,function(err,hash){
        if(err) throw err;
        else return hash
      })
     })
  },
  verifyPassword: function (password, hashedPassword) {
    bcrypt.compare(password,hashedPassword,(err,result)=>{
      if(err) throw err
      else return result
    })
   }
 };