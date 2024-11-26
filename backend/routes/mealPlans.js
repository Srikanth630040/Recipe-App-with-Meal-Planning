const express = require('express');
const { createMealPlan } = require('../controllers/mealPlansController');
const router = express.Router();

router.post('/', createMealPlan);

module.exports = router;
