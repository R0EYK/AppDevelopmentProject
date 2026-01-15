const express = require("express");
const router = express.Router();
const postController = require("../controller/postsController.js");

router.get("/posts", postController.getAllPosts);
router.get("/posts/:id", postController.getPost);

module.exports = router;
