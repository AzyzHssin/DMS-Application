//putting all the request that exist in the file of models for the users:

const user = require('../database/models/users.js');

module.exports = {
    createNewUser: (req,res) =>{
        user.getAllUsers((err,result)=>{
            if(err) {
                console.log(err);
            }else {
                res.json(result);
            }
        })
    }
}