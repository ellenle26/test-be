var express = require("express");
var router = express.Router();
const reviewsControllers = require("../controllers/reviewsControllers");

/* GET home page. */
router.get("/", reviewsControllers.getReviews);

router.post("/", reviewsControllers.createReview);

module.exports = router;
