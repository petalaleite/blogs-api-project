const express = require('express');
const { postController } = require('../controllers');

const postRoutes = express.Router();

postRoutes.get('/', postController.listPosts);

module.exports = postRoutes;