const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    instructions: { type: String, required: true },
    ingredients: [{ type: String }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
