var db = require('../config/db')

function getProduct(callback){
    let query = `SELECT * FROM product`

    db.query(query,callback)
}

function getSingleproduct(callback,id){
    let query = `SELECT * FROM product WHERE ID = ${id}`
    db.query(query,callback)
}

function addProduct(callback,product_name,price){
    let query = `INSERT INTO product(product_name,price) VALUES ('${product_name}','${price}')`
    db.query(query,callback)
}
function deleteProduct(callback,id){
    let query = `DELETE FROM product WHERE ID = ${id}`
    db.query(query,callback)
}
module.exports = {getProduct,getSingleproduct,addProduct,deleteProduct};