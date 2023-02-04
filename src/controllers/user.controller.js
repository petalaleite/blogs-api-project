const { userService } = require('../services');

const listUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
   if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;  
  const userEmailAndPassword = await userService.getEmailAndPassword(email, password);
  if (userEmailAndPassword) return res.status(409).json({ message: 'User already registered' });
  const result = await userService.createUser(displayName, email, password, image);
  return res.status(201).json(result);
};

module.exports = {
  listUsers,
  getUserById,
  createUser,
};