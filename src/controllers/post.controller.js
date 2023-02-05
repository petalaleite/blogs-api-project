const { postService } = require('../services');

const listPosts = async (req, res) => {
  const posts = await postService.listPosts();
  return res.status(200).json(posts);
};

module.exports = {
  listPosts,
};