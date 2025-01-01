const productModel = require('../../model/product/product_model')
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
    let{product_name,price} = req.body
    productModel.addProduct((err,result)=>{
        if(err){
            console.log(err)
        }
        res.send({message:"item added success"})
    },product_name,price)
}
function deleteProduct(req,res){
    let{id} = req.params
    productModel.deleteProduct((err)=>{
        if(err){
            console.log(err)
        }
        res.send({message:"item deleted"})
    },id)
}

function updateProduct(req,res){
    let {id} = req.params;
    let {product_name,price} = req.body;
    productModel.updateProduct((err)=>{
        if(err){
            console.log(err)
        }
        res.send({message:"item updated"})
    },product_name,price,id)
}
module.exports = {getProduct,getSingleproduct,addProduct,deleteProduct,updateProduct}