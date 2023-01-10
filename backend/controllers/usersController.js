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
    res.send(error);
  }
};

export const newUser = async (req, res) => {
  try {
    const { email, password, userName } = req.body;
    const userRes = await createNewUser(email, password);
    const user = new User({
      firebaeId: userRes.id,
      name: userName,
      email: userRes.name,
    });
    user.save();
    //todo connect createwUser to new User model
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

export const editUser = (req, res) => {
  res.send("editUser");
};
export const deleteUser = async (req, res) => {
  res.send(await deleteExistingUser(req.body.uid));
};
