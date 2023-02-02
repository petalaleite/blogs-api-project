const { userModel } = require('../models');

const getUsers = () => userModel.findAll();
const getByUsername = (username) => userModel.findOne({ where: { username } });
module.exports = {
  getUsers,
  getByUsername,
};