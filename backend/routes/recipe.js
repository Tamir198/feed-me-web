import { Router } from "express";
const router = Router();

import {
  getRecipes,
  addRecipes,
  updateRecipes,
  deleteRecipes,
  getNumberOfRecipes,
} from "../controllers/recipeController.js";

router.post("/getRecipes", getRecipes);
router.get("/getRecipesNumber", getNumberOfRecipes);
router.post("/addRecipe", addRecipes);
router.patch("/updateRecipe", updateRecipes);
router.delete("/deleteRecipe", deleteRecipes);

export default router;
