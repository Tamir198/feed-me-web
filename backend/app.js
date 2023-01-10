import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.js";
import recipeRoutes from "./routes/recipe.js";
import { connectToMongo } from "./db.js";
import { initFirebase } from "./services/firebase.js";

const loadExtensions = async function (app) {
  app.use(cors("*"));
  app.use(express.json());
  connectToMongo();
  initFirebase();
};

const loadRoutes = function (app) {
  app.use(usersRoutes);
  app.use("/recipe", recipeRoutes);
};

const createApp = () => {
  const app = express();
  loadExtensions(app);
  loadRoutes(app);

  return app;
};

export default createApp;
