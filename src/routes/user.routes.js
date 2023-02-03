const express = require('express');
const { userController } = require('../controllers');
const { validateNameAndPassword, validateEmail } = require('../middlewares/validateUser');
const { validateJWT } = require('../middlewares/validateJWT');

const userRoutes = express.Router();

userRoutes.get('/', userController.listUsers);
userRoutes.get('/:id', validateJWT, userController.getUserById);
userRoutes.post('/', validateNameAndPassword, validateEmail, userController.createUser);

module.exports = userRoutes;