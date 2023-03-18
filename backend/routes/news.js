import { Router } from "express";
const router = Router();

import { getAllNews } from "../controllers/newsController.js";

router.get("/allNews", getAllNews);

export default router;
