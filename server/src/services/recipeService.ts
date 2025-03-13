import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL || "https://www.themealdb.com/api/json/v1/1";

console.log("API_BASE_URL in service:", API_BASE_URL); 

export const fetchRecipes = async (filter?: string, value?: string) => {
  let url = `${API_BASE_URL}/search.php?s=`;

  if (filter && value) {
    url = `${API_BASE_URL}/filter.php?${filter}=${value}`;
  }

  const response = await axios.get(url);
  return response.data.meals;
};

export const fetchRecipeDetails = async (id: string) => {
  const url = `${API_BASE_URL}/lookup.php?i=${id}`;
  const response = await axios.get(url);
  return response.data.meals[0];
};
