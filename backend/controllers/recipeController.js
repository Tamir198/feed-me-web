import { Recipe } from "../models/recipeModel.js";
import { VALUES } from "../constants/values.js";
import { User } from "../models/userModel.js";

export const getRecipes = async (req, res) => {
  const pageSize = VALUES.RECIPES_PAGE_SIZE;
  const page = req.body.page || 1;
  const skip = (page - 1) * pageSize;
  try {
    const allRecipe = await Recipe.find({}).skip(skip).limit(pageSize).exec();
    res.send(allRecipe);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const addRecipes = async (req, res) => {
  const { userId, title, description, category } = req.body;
  try {
    const recipe = new Recipe({
      userId,
      title,
      description,
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
  io.emit("recipe-add", addTemplateUrl(ad));
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
