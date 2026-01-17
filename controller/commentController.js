const { commentModel } = require("../model/commentModel.js");

const getCommentsByPostId = async (req, res) => {
  try {
    const comments = await commentModel.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error getting comments", error: error.message });
  }
};

module.exports = { getCommentsByPostId };
