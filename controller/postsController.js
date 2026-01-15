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

module.exports = { getAllPosts };
