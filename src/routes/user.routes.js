const express = require('express');
const { userController } = require('../controllers');
const { validateNameAndPassword, validateEmail } = require('../middlewares/validateUser');
const { validateJWT } = require('../middlewares/validateJWT');

const userRoutes = express.Router();

userRoutes.get('/', validateJWT, userController.listUsers);
userRoutes.get('/:id', validateJWT, userController.getUserById);
userRoutes.post('/',
 validateNameAndPassword, 
 validateEmail, 
 validateJWT, 
 userController.createUser);

module.exports = userRoutes;