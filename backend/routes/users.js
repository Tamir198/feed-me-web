import { Router } from "express";
const router = Router();

import { loginUser } from "../controllers/usersController.js";

router.get("/login", loginUser);

export default router;
