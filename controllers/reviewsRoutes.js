const express = require('express');
const router = express.Router();
const reviewsController = require('./reviews');

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
