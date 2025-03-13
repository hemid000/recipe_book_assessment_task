import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const RecipeListPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/recipes") // Backend API
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} width="100" />
              <p>{recipe.strMeal}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListPage;
