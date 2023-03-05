import { Router } from "express";
const router = Router();

import {
  getRecipes,
  addRecipes,
  updateRecipes,
  deleteRecipes,
  countRecipe,
  getNumberOfRecipes,
  getRecipesById,
  getSumCategory,
} from "../controllers/recipeController.js";

router.get("/getRecipesNumber", getNumberOfRecipes);
router.get("/getAllUserRecipes", getRecipesById);
router.post("/getRecipes", getRecipes);
router.get("/getSumCategory", getSumCategory);
router.post("/addRecipe", addRecipes);
router.patch("/updateRecipe", updateRecipes);
router.delete("/deleteRecipe", deleteRecipes);
router.get("/getSumCategory", countRecipe);

export default router;
