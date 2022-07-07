const product = require('../database/models/product.js');

module.exports = {
    getProduct: (req,res)=>{
        console.log("Product table data")
        product.getAllProduct((err,result)=>{
            if(err) {
                res.status(500).send()
            }else {
                res.json(result)
            }
        })
    }
}
