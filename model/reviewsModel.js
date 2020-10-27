const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	date: String,
	rating: Number,
	Reviews: String,
	Product: [
		{
			ref: 'Product',
			type: Schema.Types.ObjectId,
		},
	],
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;