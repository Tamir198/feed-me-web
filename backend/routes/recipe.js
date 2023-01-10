import { Router } from "express";
const router = Router();

import {
  getRecipes,
  addRecipes,
  updateRecipes,
  deleteRecipes,
} from "../controllers/recipeController.js";

router.get("/getRecipes", getRecipes);
router.post("/addRecipe", addRecipes);
router.patch("/updateRecipe", updateRecipes);
router.delete("/deleteRecipe", deleteRecipes);

export default router;
