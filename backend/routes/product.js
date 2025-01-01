const express = require('express')
const router = express.Router();

const controller = require('../controller/todo_controller')
const product = require('../controller/product_controller')
router.get('/',product.getProduct);
router.get('/:id',controller.getSingleTodo)
router.post('/',controller.postTodo)


module.exports = router;