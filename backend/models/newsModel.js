import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: String,
});

export const NewsModel = mongoose.model("News", schema);
