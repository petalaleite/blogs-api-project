const jwt = require('jsonwebtoken');

require('dotenv/config');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET || '';

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const user = await userService.getByUsername(decoded.padStart.userId);
    req.user = user;
    next();
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }   
};