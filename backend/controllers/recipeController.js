import { Recipe } from "../models/recipeModel.js";
import { VALUES } from "../constants/values.js";
import { User } from "../models/userModel.js";
import { ObjectId } from "mongodb";
import { io } from "../services/socket.js";
import { openSocket } from "../services/socket.js";

export const getRecipes = async (req, res) => {
  const pageSize = VALUES.RECIPES_PAGE_SIZE;
  const page = req.body.page || 1;
  const skip = (page - 1) * pageSize;
  try {
    const allRecipe = await Recipe.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(pageSize)
      .exec();
    res.send(allRecipe);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
export const getSumCategory = async (req, res) => {
  const data = await Recipe.aggregate([
    {
      $group: {
        _id: "$category",
        value: { $sum: 1 }, // this means that the count will increment by 1
      },
    },
  ]).exec();
  res.send(data);
};
export const getRecipesById = async (req, res) => {
  const userId = req.query.id;

  const user = await User.findOne({ _id: ObjectId(userId) });

  const userRecipes = await Recipe.find({
    _id: { $in: user.recipesId },
  }).exec();
  res.send({ userRecipes });
};

export const addRecipes = async (req, res) => {
  const { userId, author, title, description, category } = req.body;
  io.emit("add-recipe", { data: userId });

  try {
    const recipe = new Recipe({
      userId,
      title,
      description,
      author,
      category,
      createdAt: new Date(),
    });
    const recipe_save = await recipe.save();
    res.send("OK");

    User.findOneAndUpdate(
      { _id: userId },
      { $push: { recipesId: recipe_save._id } }
    ).exec();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const updateRecipes = async (req, res) => {
  // {id, titel , discri..}
  try {
    await MyModel.find({ name: "john", age: { $gte: 18 } }).exec();

    const allRecipe = await Recipe.find({
      skip: req.body.skip,
      limit: req.body.limit,
    });
    res.send(allRecipe);
  } catch (err) {
    res.status(400).send(err.message);
  }

  res.send("updateRecipes");
};

export const deleteRecipes = async (req, res) => {
  try {
    await Recipe.findByIdAndRemove({ _id: req.body._id });
    res.send("OK");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getNumberOfRecipes = async (req, res) => {
  const recipesNum = await Recipe.countDocuments({});
  res.send({ recipesNum });
};

export const countRecipe = async (req, res) => {
  try {
    const data = await Recipe.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]);
    res.send(data);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const lastPosts = async (req, res) => {
  Recipe.find()
    .sort({ _id: -1 })
    .limit(req.body.limit)
    .exec((err, docs) => {
      if (err) {
        console.error(err);
        res.status(404).send({ err: "Not found" });
      } else {
        console.log(docs);
        res.send({ lastPosts: docs });
      }
    });
};
