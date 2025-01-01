const productModel = require('../model/product_model')
function getProduct(req,res){
    
    productModel.getProduct((err,result)=>{
       if(err){
        res.status(500).send({message:"error feching data"})
       }
       res.send(result)
    })
}

function getSingleproduct(req,res){
    let {id} = req.params
    productModel.getSingleproduct((err,result)=>{
        if(err){
            console.log(err)
        }
        res.send(result)
    },id)
}
function addProduct(req,res){
    let{product_name,price} = req.params
    productModel.addProduct((err,result)=>{
        if(err){
            console.log(err)
        }
        res.send({message:"item added success"})
    },product_name,price)
}

module.exports = {getProduct,getSingleproduct,addProduct}