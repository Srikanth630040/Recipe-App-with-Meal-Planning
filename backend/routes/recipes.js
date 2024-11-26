const express = require('express');
const { searchRecipes } = require('../controllers/recipesController');
const router = express.Router();

router.get('/', searchRecipes);

module.exports = router;
