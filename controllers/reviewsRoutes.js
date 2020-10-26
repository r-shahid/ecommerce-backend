const reviewsController = require('./reviews');
const { Router } = require("express");
const { findById } = require("../model/productModel")
const router = Router();
const mongoose = require('mongoose')
const toId = mongoose.Types.ObjectId

// Get all reviews
router.get('/', reviewsController.getAllReviews);

// Get review by _id
router.get('/:id', reviewsController.getReviewById);

// Create review
router.post('/', reviewsController.createReview);

// Update review
router.put('/:id', reviewsController.updateReview);

// Delete review
router.delete('/:id', reviewsController.deleteReview);

module.exports = router;
