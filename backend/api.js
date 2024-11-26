// api.js - File to interact with the Spoonacular API

const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Your Spoonacular API key
const apiKey = process.env.SPOONACULAR_API_KEY;

// Function to fetch recipes based on search query (e.g., 'pasta', 'salad')
const fetchRecipes = async (query) => {
  try {
    // Define the URL to fetch data from Spoonacular API
    const url = `https://api.spoonacular.com/recipes/complexSearch`;

    // Set up the API request parameters
    const params = {
      query: query,         // Search term (e.g., 'pasta', 'salad')
      apiKey: apiKey,       // API key for authentication
    };

    // Make a GET request to the Spoonacular API with the parameters
    const response = await axios.get(url, { params });

    // If the response contains recipes, return the results
    if (response.data && response.data.results) {
      return response.data.results;  // List of recipes
    } else {
      throw new Error('No recipes found.');
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw new Error('Failed to fetch recipes.');
  }
};

// Function to fetch recipe details by its ID (including ingredients, instructions, etc.)
const fetchRecipeDetails = async (recipeId) => {
  try {
    // Define the URL to fetch recipe details from the Spoonacular API
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information`;

    // Set up the API request parameters
    const params = {
      apiKey: apiKey,       // API key for authentication
    };

    // Make a GET request to the Spoonacular API for detailed recipe data
    const response = await axios.get(url, { params });

    // If recipe details are found, return the data
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

// Export the functions so they can be used in other files (e.g., in app.js)
module.exports = {
  fetchRecipes,
  fetchRecipeDetails,
};
