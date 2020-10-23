const express = require('express');
const router = express.Router();
const productsController = require('./products');

// GET ALL products
router.get('/', productsController.getAllProducts);

// GET product by ID
router.get('/:id', productsController.getProductById);

// CREATE product
router.post('/', productsController.createProduct);

// UPDATE product
router.put('/:id', productsController.updateProduct);

// DELETE product
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
