const express = require("express");
const router = express.Router();
const commentController = require("../controller/commentController.js");

router.get("/comments/:postId", commentController.getCommentsByPostId);
router.post("/comments/create", commentController.createComment);
router.put("/comments/update", commentController.updateComment);

module.exports = router;
