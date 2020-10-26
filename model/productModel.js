const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
	product: String,
	img: String,
	price: Number,
	productDescription: String,
	Review: [
		{
			ref: 'Review',
			type: Schema.Types.ObjectId,
		},
	],
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
