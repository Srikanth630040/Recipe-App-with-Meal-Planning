const MealPlan = require('../models/MealPlan');

const createMealPlan = async (req, res) => {
    try {
        const { recipes, userId } = req.body;
        const newPlan = new MealPlan({ userId, recipes });
        await newPlan.save();
        res.status(201).json(newPlan);
    } catch (error) {
        res.status(500).json({ error: "Failed to create meal plan" });
    }
};

module.exports = { createMealPlan };
