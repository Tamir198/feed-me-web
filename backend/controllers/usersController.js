import { User } from "../models/userModel.js";
import {
  createNewUser,
  deleteExistingUser,
  SignInExistingUser,
} from "../services/firebase.js";

export const SignInUser = async (req, res) => {
  try {
    const userRes = await SignInExistingUser(req.body.email, req.body.password);
    res.send(userRes);
  } catch (error) {
    console.log(error);
  }
};

export const newUser = async (req, res) => {
  const user = new User({ id: 123, name: "Silence" });
  user.save();
  //todo connect createNewUser to new User model
  const userRes = await createNewUser(req.body.email, req.body.password);
  res.send(userRes);
};

export const editUser = (req, res) => {
  res.send("editUser");
};
export const deleteUser = (req, res) => {
  deleteExistingUser(req.body.uid);
  res.send("User deleted");
};
