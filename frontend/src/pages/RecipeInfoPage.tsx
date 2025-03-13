import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface RecipeDetails {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
}

const RecipeInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeDetails | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/recipes/${id}`) // Backend API
      .then((res) => setRecipe(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Origin:</strong> {recipe.strArea}</p>
      <p><strong>Instructions:</strong> {recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeInfoPage;
