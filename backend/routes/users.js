import { Router } from "express";
const router = Router();

import {
  deleteUser,
  editUser,
  SignInUser,
  newUser,
  getPostsAfterDate,
} from "../controllers/usersController.js";

router.post("/user/existingUser", SignInUser);
router.post("/user/postsAfterDate", getPostsAfterDate);
router.post("/user/newUser", newUser);
router.patch("/user/editUser", editUser);
router.delete("/user/deleteUser", deleteUser);

export default router;
