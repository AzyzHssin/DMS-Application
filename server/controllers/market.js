//This is where we get the requests from the models fro the user can add his market and sell it :

const market = require('../database/models/market.js');

module.exports = {
    createMarket: (req,res)=>{
        market.addMarket([req.body.id, req.body.username, req.body.title, req.body.image_url, req.body.price, req.body.decription, req.body.categorie, req.body.quantite, req.body.tel],(err,results)=>{
            if(err) {
                console.log(err)
                res.status(409).send()
            }else  {
                res.status(201).send("market has been add it")
            }
        })
    }
,
getMarket:(req,res)=>{
    console.log("im inside the request get market")
    market.getAllMarkets((err,result)=>{
        if(err){
            res.status(500).send()
        }
        else{
                res.json(result)
        }
})
},
update: (req,res)=>{
    console.log('inside update request');
    market.updateMarket([req.body.title,req.body.image_url,req.body.price,req.body.decription,req.body.categorie,req.body.quantite.req.body.tel],(err,results)=>{
        if(err) {
            console.log(err)
            res.status(409).send('Update failed')
        }else  {
            res.status(201).send('Market has been updated')
        }
    })
}


}