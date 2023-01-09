import { Router } from "express";
const router = Router();

import {
  getRecipes,
  addRecipes,
  updateRecipes,
  deleteRecipes,
} from "../controllers/recipeController.js";

router.get("/recipe/getRecipes", getRecipes);
router.post("/recipe/addRecipe", addRecipes);
router.patch("/recipe/updateRecipe", updateRecipes);
router.delete("/recipe/deleteRecipe", deleteRecipes);

export default router;
