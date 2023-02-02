const express = require('express');

const { userController } = require('../controllers');

const router = express.Router();

router.get('/', userController.listUsers);
// router.get('/:id', userController.getUserById);
// router.post('/', userController.createUser);

module.exports = router;