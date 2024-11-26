import React, { useState } from 'react';
import API from '../api';

const RecipeSearch = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const searchRecipes = async () => {
        const { data } = await API.get('/recipes', { params: { query } });
        setRecipes(data);
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for recipes" 
            />
            <button onClick={searchRecipes}>Search</button>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} alt={recipe.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeSearch;
