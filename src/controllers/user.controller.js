const { userService } = require('../services');

const listUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    if (!users) return res.status().json();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// const createUser = async (req, res) => {

// };

module.exports = {
  listUsers,
  // createUser,
};