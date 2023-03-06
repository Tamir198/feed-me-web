import { db } from "../db.js";

const schema = new db.Schema({
  firebaeId: String,
  name: String,
  email: String,
  recipesId: [String],
});
export const User = db.model("User", schema);

