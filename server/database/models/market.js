//This is where the user can add his market and sell it :

const connection = require('../index.js');


module.exports = {
    addMarket: (params, callback) =>{
        let mysql = `INSERT INTO sell (users_id ,title, image_url, price, description, categorie, quantite, tel) VALUES (?,?,?,?,?,?,?,?)`;
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
    },
    updateMarket: (params, callback) =>{
        let mysql = `UPDATE sell SET title=?, image_url=?, price=?, description=?, categorie=?, quantite=?, tel=? WHERE id=?`;
        connection.query(mysql, params, (err,results)=>{
            return err ? callback(err,null) : callback(null,results)
        })
    }
}