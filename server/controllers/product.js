const product = require('../database/models/product.js');

module.exports = {
    getProduct: (req,res)=>{
        product.getAllProduct((err,result)=>{
            if(err) {
                res.status(500).send()
            }else {
                res.json(result)
            }
        })
    }
}
