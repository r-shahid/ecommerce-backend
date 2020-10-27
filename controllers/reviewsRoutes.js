const reviewsController = require('./reviews');
const { Router } = require("express");
const { findById } = require("../model/productModel")
const router = Router();
const mongoose = require('mongoose')
const toId = mongoose.Types.ObjectId
const Review = require('../model/reviewsModel');
const Product = require('../model/productModel');

// Get all reviews
router.get('/', reviewsController.getAllReviews);

// Get review by _id
router.get('/:id', reviewsController.getReviewById);

// Create review
// router.post('/products:id', reviewsController.createReview);
router.post('/products:id', async (req,res) => {
    const review = await Review.create(req.body)
    const product = await Product.findById(req.params.productid);
  review.product = product._id
  review.save()
  product.review.push(review._id);
  product.save();
  res.json(review);
}
) 

// Update review
router.put('/products:id', reviewsController.updateReview);

// Delete review
router.delete('/products:id', reviewsController.deleteReview);

module.exports = router;