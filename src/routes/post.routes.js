const express = require('express');
const { postController } = require('../controllers');
const { validateJWT } = require('../middlewares/validateJWT');

const postRoutes = express.Router();

postRoutes.get('/', validateJWT, postController.listPosts);

module.exports = postRoutes;