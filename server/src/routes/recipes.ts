import { Router } from "express";
import { getRecipes, getRecipeDetails } from "../controllers/recipeController";

const router = Router();

router.get("/", getRecipes);
router.get("/:id", getRecipeDetails);

export default router;
export {};