import { Router } from "express";
const router = Router();

import {
  deleteUser,
  editUser,
  SignInUser,
  newUser,
  numberOfPostsBetweenDates,
} from "../controllers/usersController.js";

router.post("/user/existingUser", SignInUser);
router.post("/user/numberOfPostsBetweenDates", numberOfPostsBetweenDates);
router.post("/user/newUser", newUser);
router.patch("/user/editUser", editUser);
router.delete("/user/deleteUser", deleteUser);

export default router;
