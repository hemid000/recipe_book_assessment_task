import axios from "axios";

export const getRecipes = async () => {
  const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  return response.data;
};
