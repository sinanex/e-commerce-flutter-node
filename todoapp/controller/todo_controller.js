const todoModel = require("../model/todo_model")


function getAllTodo(req,res){
    todoModel.getAllTodo((err,result) => {
  if(err){
    res.status(500).send({error:"error fetching data"})
  }
  res.send(result);
    }
)}

function getSingleTodo(req,res){
    todoModel.getSingleTodo((err,result)=>{
        if(err){
            res.status(500).send({error:"error fetching data"})
        }
        res.send(result);
    });
}

module.exports = {getAllTodo};