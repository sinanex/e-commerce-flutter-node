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


function deleteTodo(callback,id){
    var query = `delete from todo where id = '${id}'`
    db.query(query,(callback))

}

function updateTodo(callback,id){
    var query = `update from todo set title = '${title}' and subtitle = ${subtitle} where id = '${id}'`
    db.query(query,callback)
}
module.exports = {getAllTodo,getSingleTodo,postTodo}