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

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { message } = await userService.getUserById(id);
  console.log(message);
  return res.status(200).json(message);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.createUser(displayName, email, password, image);
  return res.status(201).json({ user });
};

module.exports = {
  listUsers,
  getUserById,
  createUser,
};