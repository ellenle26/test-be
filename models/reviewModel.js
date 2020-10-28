const mongoose = require("mongoose");
const Post = require("./postModel");

const schema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    content: { type: String, require: true },
    post: { type: String, require: true },
  },
  { timestamps: true }
);

const Reviews = mongoose.model("Reviews", schema);

module.exports = Reviews;
