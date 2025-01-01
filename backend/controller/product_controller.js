const productModel = require('../model/product_model')
function getProduct(req,res){
    
    productModel.getProduct((err,result)=>{
       if(err){
        res.status(500).send({message:"error feching data"})
       }
       res.send(result)
    })
}

module.exports = {getProduct}