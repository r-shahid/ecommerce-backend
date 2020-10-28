const {Router} = require('express');
const { findById } = require('../model/productModel');
const router = Router();
const Product = require('../model/productModel');
const Review = require('../model/reviewsModel');

//Create
router.post('/newproduct', async (req,res) => {
    res.json(await Product.create(req.body))
})

//Create a review
router.post('/review/:productid', async (req,res) => {
    const review = await Review.create(req.body);
    const product = await Product.findById(req.params.productid);
    review.product = product._id
    review.save()
    product.reviews.push(review._id)
    product.save()
    res.json(review);
}) 

//Get products
router.get("/", async (req, res) => {
    res.json(await Product.find({}))
})
//Get reviews
router.get("/review", async (req,res) => {
    res.json(await Product.find({}));
});
module.exports = router;