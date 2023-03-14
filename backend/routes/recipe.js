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
  lastPosts,
  searchRecipeByTitle,
} from "../controllers/recipeController.js";

router.get("/getRecipesNumber", getNumberOfRecipes);
router.get("/getAllUserRecipes", getRecipesById);
router.get("/getSumCategory", getSumCategory);
router.get("/getSumCategory", countRecipe);

router.post("/getRecipes", getRecipes);
router.post("/lastPosts", lastPosts);
router.post("/addRecipe", addRecipes);
router.post("/searchByTitle", searchRecipeByTitle);

router.patch("/updateRecipe", updateRecipes);

router.delete("/deleteRecipe", deleteRecipes);

export default router;
