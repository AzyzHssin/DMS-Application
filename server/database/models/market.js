//This is where the user can add his market and sell it :

const connection = require('../index.js');


module.exports = {
    addMarket: (params, callback) =>{
        let mysql = `INSERT INTO sell (users_id, quantite, categorie, description, price, image_url, title, tel) VALUES (?,?,?,?,?,?,?,?)`;
        //change the params the same order of query like this [req.body.users.id,req.body.quantity......]
        connection.query(mysql, params, (err, results) =>{
            return err ? callback(err,null) : callback(null, results);
        })
    },
    getAllMarkets: (callback) =>{
        let mysql = `SELECT * FROM sell`;
        connection.query(mysql, (err,results)=>{
            return err ? callback(err,null) : callback(null,results)        
        })
    }
}