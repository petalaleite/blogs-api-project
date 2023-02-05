const express = require('express');
const { categoryController } = require('../controllers');
const { validateJWT } = require('../middlewares/validateJWT');

const categoryRoutes = express.Router();

categoryRoutes.get('/', validateJWT, categoryController.listCategories);
categoryRoutes.post('/', validateJWT, categoryController.createCategory);

module.exports = categoryRoutes;