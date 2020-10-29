const {Schema, model} = require("mongoose")
const mongoose = require('../db/connection');

const ProductSchema = new Schema({
	product: String,
	img: String,
	price: Number,
	productDescription: String,
	reviews: [{ ref: 'Review', type: Schema.Types.ObjectId }],
});

const Product = model('Product', ProductSchema);
module.exports = Product;