const db = require("../config/db")

function getAllTodo(callback){
    var query = `select * from todo`
    db.query(query,callback)
}

function getSingleTodo(callback,id){
    var query = `select * from todo ${id}`
      db.query(query,callback)
}

function postTodo(callback,title,subtitle){
    var query = `insert into todo(title,subtitle)values('${title}','${subtitle}')`

    db.query(query,callback)
}

module.exports = {getAllTodo,getSingleTodo,postTodo}