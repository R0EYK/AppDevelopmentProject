const { postModel } = require("../model/postModel.js");

const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Error while trying to get all posts",
      error: error.message,
    });
  }
};

const getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await postModel.findById(id);
    if (!post) {
      return res
        .status(400)
        .json({ message: "Could not find post with the specified id" });
    }
    res.status(200).json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching post", error: error.message });
  }
};

const getPostsByUploaderId = async (req, res) => {
  try {
    const { uploaderId } = req.query;
    const posts = await postModel.find({ uploader: uploaderId });
    if (!posts) {
      return res
        .status(400)
        .json({ message: "Could not find posts with the specified sender" });
    }
    res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: error.message });
  }
};

module.exports = { getAllPosts, getPost, getPostsByUploaderId };
