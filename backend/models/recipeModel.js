import mongoose from "mongoose";
const schema = new mongoose.Schema({
  userId: { type: Number, required: true },
  title: String,
  description: String,
  category: String,
  createdAt: Date,
});

export const Recipe = mongoose.model("Recipe", schema);

// export { Recipe };
