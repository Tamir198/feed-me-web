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

//TODO chang this so it will work
export const getPostsAfterDate = async (req, res) => {
  const cutoffDate = new Date("2022-01-01"); // example cutoff date
  const objectIdFromDate =
    Math.floor(cutoffDate.getTime() / 1000).toString(16) + "0000000000000000"; // convert cutoff date to ObjectId format

  MyModel.find({ _id: { $gt: objectIdFromDate } }, (err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(docs); // array of documents matching the query
    }
  });
};


