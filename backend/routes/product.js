const express = require('express')
const router = express.Router();

const controller = require('../controller/todo_controller')

router.get('/todo',controller.getAllTodo)

module.exports = router;