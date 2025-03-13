import { Request, Response } from "express";
import { fetchRecipes, fetchRecipeDetails } from "../services/recipeService";

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const { filter, value } = req.query;
    const recipes = await fetchRecipes(filter as string, value as string);
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipes" });
  }
};

export const getRecipeDetails = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const recipe = await fetchRecipeDetails(id);
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipe details" });
  }
};
