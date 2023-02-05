const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const result = await categoryService.createCategory(name);
  return res.status(201).json({ name: result.name });
};

const listCategories = async (req, res) => {
const results = await categoryService.listCategories();
return res.status(200).json(results);
};

module.exports = {
  createCategory,
  listCategories,
};