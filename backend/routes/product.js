const express = require('express')
const router = express.Router();

const product = require('../controller/product_controller')
router.get('/',product.getProduct);
router.get('/:id',product.getSingleproduct)
router.post('/',product.addProduct)


module.exports = router;