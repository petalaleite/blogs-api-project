const { User } = require('../models');
//  attributes: { exclude: ['password'] } }

const getUserById = async (id) => {
 const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
 if (!user) return ({ type: 'USER_NOT_FOUND', message: 'Users does not exist' });
 return { message: user };
};

const getEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  console.log(user);
  return user;
};

const createUser = async (displayName, email, password, image) => {
 const user = await User.create({ displayName, email, password, image });
 console.log('log do create user', user);
 return user;
};

module.exports = {
  getEmailAndPassword,
  getUserById,
  createUser,
};