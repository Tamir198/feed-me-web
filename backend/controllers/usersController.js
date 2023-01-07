import { createNewUser } from "../services/firebase.js";

export const loginUser = (req, res) => {
  res.send("loginUser");
};
export const newUser = async (req, res) => {
  const userRes = await createNewUser(req.body.email, req.body.password);
  res.send(userRes);
};

export const editUser = (req, res) => {
  res.send("editUser");
};
export const deleteUser = (req, res) => {
  res.send("deleteUser");
};
