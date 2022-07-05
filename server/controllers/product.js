const product = require('../database/models/product.js');

module.exports = {
    getProduct: (req,res)=>{
        console.log("testing")
        product.getAllProduct((err,result)=>{
            if(err) {
                res.status(500).send()
            }else {
                res.send(result)
            }
        })
    }
}
