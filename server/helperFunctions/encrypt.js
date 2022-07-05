//these function will be used during the sign up and also the log in
// basicly when a user creates a new account we will use the hashPassword function to hash the user password before saving it in the database
// During the log in phase we will use the second function verifyPassword to compare the savedPassword with the login password // it return a boolean


const bcrypt = require('bcrypt');
module.exports = {
  hashPassword: function (password, saltRounds) {
    return bcrypt.hash(password, saltRounds)
  },
  verifyPassword: function (password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword)
  }
};