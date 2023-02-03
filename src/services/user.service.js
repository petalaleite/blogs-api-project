const { User } = require('../models');

const getById = async (userId) => {
 const user = await User.findOne({ where: { userId }, attributes: { exclude: ['password'] } });
 if (!user) return ({ type: 'USER_NOT_FOUND', message: 'Users does not exist' });
 return { type: null, message: user };
};

const getEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  console.log(user);
  return user;
};

module.exports = {
  getEmailAndPassword,
  getById,
};