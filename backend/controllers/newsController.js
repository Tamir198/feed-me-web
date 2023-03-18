import { NewsModel } from "../models/newsModel.js";

export const getAllNews = async (req, res) => {
  const allNews = await NewsModel.find({});
  res.send(allNews);
};
