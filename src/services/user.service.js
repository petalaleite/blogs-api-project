const { User } = require('../models');

const getUserById = async (id) => {
 const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
 return user;
};

const getUserByEmail = async (email) => {
  const userEmail = await User.findOne({ where: { email } });
  console.log(userEmail);
  return userEmail;
};

const getEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  console.log(user);
  return user;
};

const createUser = async (displayName, email, password, image) => {
  const userEmail = await getUserByEmail(email);
  if (userEmail === email) return ({ type: 409, message: 'User already registered' });
 const user = await User.create({ displayName, email, password, image });
 console.log('log do create user', user);
 return user;
};

module.exports = {
  getEmailAndPassword,
  getUserById,
  createUser,
};