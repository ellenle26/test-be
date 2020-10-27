const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatarUrl: { type: String, require: false, default: "" },
    password: { type: String, required: true, select: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", schema);

module.exports = User;
