const Products = require('../model/productModel');

// Controller to get all product
const getAllProducts = (req, res) => {
	Products.find({})
		.populate('review')
		.then((products) => {
			res.json(products);
		});
};

// Controller to get product by _id
const getProductById = (req, res) => {
	Products.findById(req.params.id).then((product) => {
		res.json(product);
	});
};

// Controller to create an product
const createProduct = (req, res) => {
	Products.create(req.body).then((product) => {
		res.json(product);
	});
};

// Controller to update an product
const updateProduct = (req, res) => {
	Products.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
		(product) => {
			res.json(product);
		}
	);
};

// Controller to delete an product
const deleteProduct = (req, res) => {
	Products.findByIdAndDelete(req.params.id).then((author) => {
		res.json({
			status: 'success',
			msg: 'product deleted',
		});
	});
};

module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};