const productsController = require('./products');
const { Router } = require("express");
const { findById } = require("../model/productModel")
const router = Router();
const mongoose = require('mongoose')
const toId = mongoose.Types.ObjectId

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
