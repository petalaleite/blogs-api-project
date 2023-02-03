const { User } = require('../models');

const getUsers = async () => User.findAll();

const getById = async (userId) => {
 const user = await User.findOne({ where: { userId }, attributes: { exclude: ['password'] } });
 if (!user) return ({ type: 'USER_NOT_FOUND', message: 'Users does not exist' });
 return { type: null, message: user };
};

const getByUsername = async (username) => {
  console.log(username);
  const user = await User.findOne({ where: { username } });
  console.log(user);
  return user;
};

module.exports = {
  getUsers,
  getById,
  getByUsername,
};