import { Router } from "express";
const router = Router();

import {
  deleteUser,
  editUser,
  loginUser,
  newUser,
} from "../controllers/usersController.js";

router.get("/user/:userId", loginUser);
router.patch("/user/editUser", editUser);
router.delete("/user/deleteUser", deleteUser);
router.post("/user/newUser", newUser);

export default router;
