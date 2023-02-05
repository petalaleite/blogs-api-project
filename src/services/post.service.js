const { BlogPost, User, Category } = require('../models');

const listPosts = async () => {
  const posts = await BlogPost.findAll(
    { 
      include: 
      [
        { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories' }, 
    ],
  },
);
  return posts;
};

module.exports = {
  listPosts,
};