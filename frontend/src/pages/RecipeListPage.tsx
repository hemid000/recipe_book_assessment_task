import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/RecipeListPage.css";
interface Recipe {
  idMeal: string;
  strArea: string;
  strMeal: string;
  strMealThumb: string;
}

const RecipeListPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="headline">
      <h2>Recipe List</h2>
      <ul className="cards">
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} width="100" />
              <div className="box">
                <p>{recipe.strMeal}</p>
                <p>{recipe.strArea}</p>
              </div>
              <span>Get information</span>

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeListPage;
