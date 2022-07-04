//This is where we get the requests from the models fro the user can add his market and sell it :

const market = require('../database/models/market.js');

module.exports = {
    createMarket: (req,res)=>{
        market.addMarket([req.body.id, req.body.quantite, req.body.categorie, req.body.description, req.body.price, req.body.image_url, req.body.title],(err,results)=>{
            if(err) {
                console.log(err)
                res.status(409).send()
            }else  {
                res.status(201).send("market has been add it")
            }
        })
    }

}