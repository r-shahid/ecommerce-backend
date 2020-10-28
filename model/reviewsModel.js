const {Schema, model} = require("mongoose")
const mongoose = require('../db/connection');

const reviewSchema = new Schema({
	date: String,
	rating: Number,
	Reviews: String,
	Product: [{ ref: 'Product', type: Schema.Types.ObjectId }]
});

const Review = model('Review', reviewSchema);
module.exports = Review;