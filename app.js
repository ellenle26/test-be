var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Successfully connected to database");
});

var indexRouter = require("./routes/index");
var reviewsRouter = require("./routes/reviews");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/reviews", reviewsRouter);

module.exports = app;
