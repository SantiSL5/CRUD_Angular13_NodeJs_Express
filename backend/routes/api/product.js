const express = require('express');
const router = express.Router();
const productController = require('../../controllers/controller_product');

//api/product
router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.put('/:slug', productController.updateProduct);
router.delete('/:slug', productController.deleteProduct);

module.exports = router;