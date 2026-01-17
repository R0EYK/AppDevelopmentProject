const express = require("express");
const router = express.Router();
const postController = require("../controller/postsController.js");

router.get("/posts", postController.getAllPosts);

module.exports = router;
