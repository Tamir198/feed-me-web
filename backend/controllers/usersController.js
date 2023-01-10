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
  const { email, password, userName } = req.body;
  const userRes = await createNewUser(email, password);
  const user = new User({
    firebaeId: userRes.id,
    name: userName,
    email: userRes.name,
    recipesId: [],
  });
  user.save();
  //todo connect createwUser to new User model
  res.send(user);
};

export const editUser = (req, res) => {
  const { id, name } = req.body;
  try {
    Recipe.findByIdAndUpdate({ _id: id }, { name }).exec();
  } catch (err) {
    res.status(400).send(err.message);
  }
  res.send("update user");
};
export const deleteUser = (req, res) => {
  deleteExistingUser(req.body.uid);
  res.send("User deleted");
};
