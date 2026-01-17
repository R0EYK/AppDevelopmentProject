const express = require("express");
const router = express.Router();
const postController = require("../controller/postsController.js");

router.get("/posts", postController.getAllPosts);
router.get("/posts/uploader", postController.getPostsByUploaderId);
router.get("/posts/:id", postController.getPost);
router.post("/posts/create", postController.createPost);
router.put("/posts/update/:id", postController.updatePost);
router.delete("/posts/delete", postController.deletePost);

module.exports = router;
