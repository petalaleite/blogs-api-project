const jwt = require('jsonwebtoken');
const { User } = require('../models');

const jwtConfig = {
  expiresIn: '3d',
  algorithm: 'HS256',
};
const secret = process.env.JWT_SECRET || 'tolkien';

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUserById = async (id) => {
 const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
 return user;
};

const getEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  const token = jwt.sign({ user }, secret, jwtConfig);
  return { token };
};

module.exports = {
  getAllUsers,
  getEmailAndPassword,
  getUserById,
  createUser,
};