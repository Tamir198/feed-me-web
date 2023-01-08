import { User } from "../models/userModel.js";

export const loginUser = (req, res) => {
  res.send("loginUser");
};
export const newUser = (req, res) => {
  const user = new User({ id: 123, name: "Silence" });
  user.save();

  res.send("Item added");
};
export const editUser = (req, res) => {
  res.send("editUser");
};
export const deleteUser = (req, res) => {
  res.send("deleteUser");
};
