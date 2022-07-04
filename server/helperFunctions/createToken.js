const bcrypt =  require ('bcrypt')

 module.exports = {
  hashPassword:  (password, saltRounds) =>{
     bcrypt.genSalt(saltRounds,(err,salt)=>{
      bcrypt.hash(password,salt,(err,hash)=>{
        if(err) throw err;
        else return hash
      })
     })
  },
  verifyPassword:  (password, hashedPassword) =>{
    bcrypt.compare(password,hashedPassword,(err,result)=>{
      if(err) throw err
      else return result
    })
   }
 };

