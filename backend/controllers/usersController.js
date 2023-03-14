import { Recipe } from "../models/recipeModel.js";
import { User } from "../models/userModel.js";
import {
  createNewUser,
  deleteExistingUser,
  SignInExistingUser,
} from "../services/firebase.js";

export const SignInUser = async (req, res) => {
  try {
    const firebaseUserRes = await SignInExistingUser(
      req.body.email,
      req.body.password
    );
    const userRes = await User.findOne({ email: firebaseUserRes.name });
    res.send({
      id: userRes._id,
      email: userRes.email,
      name: userRes.email,
      firebaeId: firebaseUserRes.id,
    });
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
      name: userRes.name,
      email: userRes.name,
      recipesId: [],
    });
    user.save();
    //todo connect createwUser to new User model
    res.send(user);
  } catch (error) {
    res.send(error);
  }
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
export const deleteUser = async (req, res) => {
  res.send(await deleteExistingUser(req.body.uid));
};

export const numberOfPostsBetweenDates = async (req, res) => {
  const startDate = new Date(req.body.startDate);
  const endDate = new Date(req.body.endDate);

  try {
    const documents = await Recipe.find({
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    });

    res.json({
      count: documents.length,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
