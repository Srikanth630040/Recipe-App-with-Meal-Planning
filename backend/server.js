const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Recipe Search Endpoint
app.get('/api/recipes', async (req, res) => {
    const query = req.query.query; // Recipe search term from the frontend
    const apiKey = process.env.SPOONACULAR_API_KEY;

    try {
        // Call Spoonacular API
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
            params: {
                query: query,
                apiKey: apiKey
            }
        });

        // Send recipe results to frontend
        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching recipes:', error.message);
        res.status(500).json({ error: 'Failed to fetch recipes from Spoonacular' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
