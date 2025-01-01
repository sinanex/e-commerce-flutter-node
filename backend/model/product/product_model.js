var db = require('../../config/db')

function getProduct(callback){
    let query = `SELECT * FROM product`

    db.query(query,callback)
}

function getSingleproduct(callback,id){
    let query = `SELECT * FROM product WHERE ID = ${id}`
    db.query(query,callback)
}

function addProduct(callback,product_name,price){
    console.log(product_name);
    
    let query = `INSERT INTO product(product_name, price) VALUES (?, ?)`; 
    db.query(query, [product_name, price], callback);
    
}
function deleteProduct(callback,id){
    let query = `DELETE FROM product WHERE ID = ${id}`
    db.query(query,callback)
}

function updateProduct(callback,product_name,price,id){
    const query = `UPDATE product SET product_name = ?, price = ? WHERE id = ?`;
    db.query(query,[product_name,price,id],callback)
}
module.exports = {getProduct,getSingleproduct,addProduct,deleteProduct,updateProduct};