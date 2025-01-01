const express = require('express')
const router = express.Router();

const product = require('../controller/product/product_controller')
router.get('/',product.getProduct);
router.get('/:id',product.getSingleproduct)
router.post('/',product.addProduct)
router.delete('/:id',product.deleteProduct)
router.put('/:id',product.updateProduct)
module.exports = router;