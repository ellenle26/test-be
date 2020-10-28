const Post = require("../models/postModel");

const postControllers = {};

postControllers.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author").populate("reviews");
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

postControllers.updatePost = async (req, res) => {
  try {
    const { like, id } = req.body;
    const postLike = await Post.findById({ _id: id });
    let likeCount = postLike.likeCount;
    console.log("likecunt ne", likeCount);
    if (like === "false") {
      if (likeCount == 0) {
        likeCount = 0;
      } else likeCount -= 1;
    } else if (like === "true") {
      likeCount += 1;
    }
    console.log("like afte", likeCount);
    const post = await Post.findByIdAndUpdate(
      { _id: id },
      { likeCount: likeCount },
      { new: true }
    );

    const posts = await Post.find().populate("author").populate("reviews");
    res.status(200).json({
      status: "success",
      data: posts,
      message: "Successfully updated post.",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
module.exports = postControllers;
