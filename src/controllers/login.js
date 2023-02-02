require('dotenv/config');
const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET || '';

const isBodyValid = (username, password) => username && password;

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!isBodyValid(username, password)) {
      return res.status(401).json({ message: 'Some required fields are missing' });
    }
    const user = await userService.getByUsername(username);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid fields' });
    }
    const jwtConfig = {
      expiredIn: '3d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = login;