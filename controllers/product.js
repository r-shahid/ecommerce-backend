const {Router} = require('express');
const { findById } = require('../model/productModel');
const router = Router();
const Product = require('../model/productModel');
const Review = require('../model/reviewsModel');
const mongoose = require("mongoose")
const toId = mongoose.Types.ObjectId

//Create a product works
router.post('/newproduct', async (req,res) => {
    res.json(await Product.create(req.body))
})
//Create a review works
router.post('/review/:productid', async (req,res) => {
    const review = await Review.create(req.body);
    const product = await Product.findById(req.params.productid);
    review.product = product._id
    review.save()
    product.reviews.push(review._id);
    product.save()
    res.json(review);
}) 
//Get products works
router.get("/", async (req, res) => {
    res.json(await Product.find({}).populate("reviews"))
})
//Get product by id works
router.get("/:id", async (req, res) => {
    res.json(await Product.findById(req.params.id).populate("reviews"))
})
//update product by id
router.put("/:id", async (req, res) => {
  res.json(await Product.findByIdAndUpdate(req.params.id));
});
//delete product by id works
router.delete("/:id", async (req, res) => {
    res.json(await Product.findByIdAndRemove(req.params.id));
  });
//Get review by id work
router.get("/review/:id", async (req, res) => {
    res.json(await Review.findById(req.params.id));
  });
//update review by id
router.put("/review/:id", async (req, res) => {
  res.json(await Review.findByIdAndUpdate(req.params.id));
});
//delete review works
router.delete("/delreview/:id", async (req, res) => {
    res.json(await Review.findByIdAndRemove(req.params.id));
  });
module.exports = router;
