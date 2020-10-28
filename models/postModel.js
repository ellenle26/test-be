const mongoose = require("mongoose");
const User = require("./userModel");
const Reviews = require("./reviewModel");

const schema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    location: { type: String, require: true },
    caption: { type: String, require: true },
    likeCount: 0,
    imageUrl: { type: String, require: true },
    reviews: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Reviews",
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", schema);

module.exports = Post;
