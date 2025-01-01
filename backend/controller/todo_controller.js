const todoModel = require("../model/todo_model");

function getAllTodo(req, res) {
  todoModel.getAllTodo((err, result) => {
    if (err) {
      res.status(500).send({ error: "error fetching data" });
    }
    console.log(result);

    res.send(result);
  });
}

function getSingleTodo(req, res) {
  let { id } = req.params;
  console.log(id);

  todoModel.getSingleTodo((err, result) => {
    if (err) {
      res.status(500).send({ error: "error fetching data" });
    }

    res.send(result);
  }, id);
}

function postTodo(req, res) {
   let {title} = req.body;
   let {subtitle} = req.body;
   
  todoModel.postTodo((err, result) => {
    if (err) {
      res.status(500).send({ error: "error post todo" });
    }

    res.send({message:"todo added success"});
  },title,subtitle);
}

module.exports = { getAllTodo, getSingleTodo, postTodo };
