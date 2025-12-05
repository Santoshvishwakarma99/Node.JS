const express = require('express');
const {createCategory, getAllCategory, updateCategory, deleteCategory} = require('../controller/categoryController');

const router = express.Router();

router.post('/add', createCategory);
router.get('/all', getAllCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;