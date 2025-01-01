var db = require('../config/db')

function getProduct(callback){
    let query = `SELECT * FROM product`

    db.query(query,callback)
}

function getSingleproduct(callback,id){
    let query = `SELECT * FROM product WHERE ID = ${id}`
    db.query(query,callback,id)
}

module.exports = {getProduct,getSingleproduct};