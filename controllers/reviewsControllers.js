const Reviews = require("../models/reviewModel");

const reviewsControllers = {};

reviewsControllers.getReviews = async (req, res) => {
  try {
    const reviews = await Reviews.find();
    res.status(200).json({
      status: "success",
      data: reviews,
      message: "Successfully get all reviews.",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

reviewsControllers.createReview = async (req, res) => {
  try {
    const { id, user, content } = req.body;
    const review = await Reviews.create({
      user: user,
      content: content,
      post: id,
    });
    console.log("id ha", id);
    const reviews = await Reviews.find({ post: id });
    res.status(200).json({
      status: "success",
      data: reviews,
      message: "Successfully get all reviews.",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = reviewsControllers;
