const { BlogPost } = require('../models');

const listPosts = async () => {
  const posts = await BlogPost.findAll();
  return posts;
};

module.exports = {
  listPosts,
};