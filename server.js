var express = require("express");
var app = express();
var mysql = require("mysql");
var cors = require("cors");
var bodyParser = require("body-parser");

var jsonparaser = bodyParser.json();
var jwt = require("jsonwebtoken");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo_db",
});

// var userDb = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "users",
// });
db.connect((err) => {
  if (err) throw err;
  console.log("connect to database");
});
app.use(cors());
app.get("/", function (req, res) {
  res.send("<h1> server running </h1>");
});

app.listen(9000, function () {
  console.log("server started");
});
//get all todo
app.get("/todo", function (req, res) {
  db.query("select * from todo", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
//get single todo
app.get("/todo/:id", function (req, res) {
  let id = req.params.id;
  db.query("select * from todo where id =" + id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
//post

app.post("/todo", jsonparaser, function (req, res) {
  let title = req.body.title;
  let subtitle = req.body.subtitle;
  if (title == undefined || subtitle == undefined) {
    res.send({ error: "title and subtitle not fount" });
  }
  let query = `insert into todo (title,subtitle) values ('${title}','${subtitle}')`;
  db.query(query, (err) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Internal Server Error");
    }
    res.status(201).json({
      message: "Todo item added successfully",
    });
  });
});

//login

app.post("/login", jsonparaser, function (req, res) {
  let username = req.body.username;
  let password = req.body.password;

  if (username == undefined || password == undefined) {
    res.send({ message: "authentication failed" });
  }
  let query = `select name from users where username = '${username}' and password = sha1('${password}')`;
  db.query(query, (err, result) => {
    if (err || result.length == 0) {
      res.send({ message: "login error" });
    } else {
      let response = { id: result[0].id, name: result[0].name };
      let token = jwt.sign(response, "secrt", { expiresIn: 8000 });
      res.send({ message: "success", token: token });
    }
  });
});

function verifyToken(req, res, next) {
  let authHeader = req.headers.authorization;

  if (authHeader == undefined) {
    res.status(401).send({ message: "invalid token" });
  } else {
    let token = authHeader.split(" ")[1];
    jwt.verify(token, "secrt", function (err, decode) {
      if (err) {
        res.status(500).send({ error: "authentication failed" });
      } else {
        next();
      }
    });
  }
}

app.post("/register", jsonparaser, function (req, res) {
  let name = req.body.name;
  let username = req.body.username;
  let password = req.body.password;
  if (username == undefined || password == undefined || name == undefined) {
    res.send({ message: "registration failed" });
  }
  var query = `insert into users (username,password,name) values ('${username}',sha1('${password}'),'${name}')`;
  db.query(query, (err, result) => {
    if (err || result.length == 0) {
      res.send({ error: " failed" });
    } else {
      var response = { name: name };

      let token = jwt.sign(response, "secrt", { expiresIn: 8000 });
      res.send({ message: "success", token: token });
    }
  });
});

app.delete("/todo/:id", function(req,res){
  let id = req.params.id;
   let query = `delete from todo where id='${id}'`
    db.query(query,(err,result)=>{
      if(err){
        
        res.send({message:"error delete"})
        throw err
      }else{
        res.send({message:"delete success"});
      }
    })
} )

app.put("/todo/:id",jsonparaser, function(req,res){
  let id = req.params.id;
  let title = req.body.title;
  let subtitle = req.body.subtitle;
  if(title == undefined ||subtitle == undefined){
    res.send({message:"title or subtitle is empty"})
  }
    let query = `update todo set title = '${title}' , subtitle = '${subtitle}' where id = ${id}`
    db.query(query,(err,result)=>{
       if(err){
        console.log(err)
        res.send({message:"error data update"})
       }
       res.send({message:"update success"})
    });
})