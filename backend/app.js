// app.js - Backend Express Application

const express = require('express');
const { fetchRecipes, fetchRecipeDetails } = require('./api');  // Import functions from api.js
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to search recipes based on a query (e.g., pasta, salad, etc.)
app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.query || 'pasta';  // Default to 'pasta' if no query is provided
    const recipes = await fetchRecipes(query);
    res.json(recipes);  // Send the list of recipes as the response
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Failed to load recipes.' });
  }
});

// Endpoint to fetch the details of a specific recipe by its ID
app.get('/api/recipe/:id', async (req, res) => {
  try {
    const recipeId = req.params.id;  // Get the recipe ID from URL parameters
    const recipeDetails = await fetchRecipeDetails(recipeId);
    res.json(recipeDetails);  // Send the detailed recipe data as the response
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    res.status(500).json({ error: 'Failed to load recipe details.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
