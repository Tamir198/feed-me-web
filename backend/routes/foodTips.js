import { Router } from "express";
const router = Router();

import { getFoodTips } from "../controllers/foodTipsController.js";

router.get("/getTips", getFoodTips);

export default router;
