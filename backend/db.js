import mongoose from "mongoose";

export const connectToMongo = async function (app, Config) {
  try {
    mongoose.connect(
      "mongodb+srv://adi-unger:adi-unger123456@cluster0.xouxepi.mongodb.net/feed-me",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (error) {
    return `Error connecting to Mongo ${error}`;
  }
};

export const db = mongoose;
//import export  {y: value}
//export dedaukt x -> importr x
//export y => import { y }
