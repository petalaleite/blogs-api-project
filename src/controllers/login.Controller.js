require('dotenv/config');
const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET || 'tolkien';

const isBodyValid = (email, password) => email && password;

const jwtConfig = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(404).json({ message: 'Some required fields are missing' });
    }
    const user = await userService.getEmailAndPassword(email, password);
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    
    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  login,
};