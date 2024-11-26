const mongoose = require('mongoose');

const MealPlanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('MealPlan', MealPlanSchema);
