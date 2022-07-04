const product = require('../database/models/market.js');

module.exports = {
    getAllProduct: (req,res) =>{
        product.getAllProduct((err,result)=>{
            if(err) {
                console.log(err);
            } 
            res.json(result);
            
        })
    }
}