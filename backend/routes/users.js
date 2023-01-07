import { Router } from "express";
const router = Router();

import {
  deleteUser,
  editUser,
  SignInUser,
  newUser,
} from "../controllers/usersController.js";

router.post("/user/existingUser", SignInUser);
router.patch("/user/editUser", editUser);
router.delete("/user/deleteUser", deleteUser);
router.post("/user/newUser", newUser);

export default router;
