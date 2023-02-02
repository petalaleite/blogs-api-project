const { userModel } = require('../models');

const getUsers = () => userModel.findAll();
const getById = (userId) => userModel.findByPk(userId);
const getByUsername = (username) => userModel.findOne({ where: { username } });

module.exports = {
  getUsers,
  getById,
  getByUsername,
};