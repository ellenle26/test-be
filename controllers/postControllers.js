const Post = require("../models/postModel");

const postControllers = {};

postControllers.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author");
    res.status(200).json({
      status: "success",
      data: posts,
      message: "Successfully get all posts.",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

postControllers.createPost = async (req, res) => {
  try {
    const { location, caption, imageUrl } = req.body;
    const post = await Post.create({ location, caption, imageUrl });
    res.status(200).json({
      status: "success",
      data: post,
      message: "Successfully get all posts.",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
module.exports = postControllers;
