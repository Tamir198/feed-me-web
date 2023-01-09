const schema = new mongoose.Schema({
  userId: "int",
  title: "string",
  description: "string",
  category: "string",
  createdAt: Date(),
});

export const Recipe = mongoose.model("Recipe", schema);

// export { Recipe };
