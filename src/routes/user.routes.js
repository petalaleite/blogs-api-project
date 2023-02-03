const express = require('express');
const { userController } = require('../controllers');
const { validateJWT } = require('../middlewares/validateJWT');

const router = express.Router();

router.get('/', validateJWT, userController.listUsers);
router.get('/:id', userController.getUserById);
// router.post('/', userController.createUser);

module.exports = router;