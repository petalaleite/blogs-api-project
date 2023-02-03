const express = require('express');
const { loginController } = require('../controllers');
// const validateJWT = require('../middlewares/validateJWT');

const loginRoutes = express.Router();

loginRoutes.post('/', loginController.login);

module.exports = loginRoutes;