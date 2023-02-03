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
  const user = await userService.getUserById(id);
   if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.createUser(displayName, email, password, image);
  return res.status(201).json(user);
};

module.exports = {
  listUsers,
  getUserById,
  createUser,
};