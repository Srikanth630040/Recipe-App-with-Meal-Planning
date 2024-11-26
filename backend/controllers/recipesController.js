const axios = require('axios');
const Recipe = require('../models/Recipe');

const searchRecipes = async (req, res) => {
    try {
        const { query, cuisine, diet } = req.query;
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
            params: {
                apiKey: process.env.SPOONACULAR_API_KEY,
                query,
                cuisine,
                diet,
            },
        });
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch recipes" });
    }
};

module.exports = { searchRecipes };
