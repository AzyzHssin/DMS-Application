//putting all the request that exist in the file of models for the users:


const createToken = require("../helperFunctions/createToken");
const encrypt = require("../helperFunctions/encrypt")
const user = require('../database/models/users.js');
const saltRounds = 10;

module.exports = {
    getAllUsers: (req,res) =>{
        user.getAllUsers((err,result)=>{
            if(err) {
                console.log(err);
            } 
            res.json(result); 
        })
        res.render("login", {showLogin: true});
    },
    createNewUser: async (req,res) =>{
        const hashedPassword = await encrypt.hashPassword(
            req.body.password,
            saltRounds
        );
        user.getUsersByName([req.body.username], (err, result)=>{
            if(err){
                console.log(err)
            }else if(result.length >0) {
                res.status(400).send("User already exists")
            }else {
                try {
                    user.createNewUser([req.body.username, hashedPassword, req.body.avatar, req.body.wallet, req.body.tel], (err, results) => {
                        if (err) {
                            console.log(err)
                            res.sendStatus(409);
                        }
                        else {
                        res.status(201).send("user created")
                        
                    }
                    })
                }
                catch (err) {
                    console.log(err);
                    res.status(409).send()
                }
            }

        })
    },
    login: (req, res) => {
        user.getUsersByName([req.body.username], async (err, result) => {

            
            if (err) { console.log(err) }
            else if (!result.length) {
                res.send("wrong user name")
            }
            else {
                try {
                    
                    const match = req.body.password&&result[0].password
                    if (match) {
                        
                        res.status(200).json({ result: "created "})
                    }
                    else {
                        res.send("not allowed")
                    }
                }
                catch (err) {
                    console.log(err)
                }
            }
        })
    }
}