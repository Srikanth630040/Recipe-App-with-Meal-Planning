// api.js - File to interact with the Spoonacular API

const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Your Spoonacular API key
const apiKey = process.env.SPOONACULAR_API_KEY;

// Function to fetch recipes based on search query
const fetchRecipes = async (query) => {
  try {
    // URL to fetch data from Spoonacular API
    const url = `https://api.spoonacular.com/recipes/complexSearch`;

    // API request parameters
    const params = {
      query: query,         // Search term (e.g., 'pasta', 'salad')
      apiKey: apiKey,       // API key
    };

    // Make the GET request to Spoonacular API
    const response = await axios.get(url, { params });

    // Check if the response contains data
    if (response.data && response.data.results) {
      return response.data.results;  // Return list of recipes
    } else {
      throw new Error('No recipes found.');
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw new Error('Failed to fetch recipes.');
  }
};

// Function to fetch recipe details by ID
const fetchRecipeDetails = async (recipeId) => {
  try {
    // URL to fetch a specific recipe's details from Spoonacular API
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information`;

    // API request parameters
    const params = {
      apiKey: apiKey,       // API key
    };

    // Make the GET request to Spoonacular API
    const response = await axios.get(url, { params });

    // Return recipe details if found
    if (response.data) {
      return response.data;
    } else {
      throw new Error('Recipe details not found.');
    }
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw new Error('Failed to fetch recipe details.');
  }
};

// Export functions for use in other parts of the backend
module.exports = {
  fetchRecipes,
  fetchRecipeDetails,
};
