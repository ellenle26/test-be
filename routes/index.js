var express = require("express");
var router = express.Router();
const postControllers = require("../controllers/postControllers");

/* GET home page. */
router.get("/", postControllers.getPosts);
router.post("/", postControllers.createPost);
router.put("/", postControllers.updatePost);

module.exports = router;
