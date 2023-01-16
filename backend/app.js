import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.js";
import recipeRoutes from "./routes/recipe.js";
import foodTipsRoutes from "./routes/foodTips.js";
import { connectToMongo } from "./db.js";
import { initFirebase } from "./services/firebase.js";
import { openSocket } from "./services/socket.js";

const loadExtensions = async function (app) {
  openSocket();
  app.use(cors("*"));
  app.use(express.json());
  connectToMongo();
  initFirebase();
};

const loadRoutes = function (app) {
  app.use(usersRoutes);
  app.use("/recipe", recipeRoutes);
  app.use("/foodTips",foodTipsRoutes);
};

const createApp = () => {
  const app = express();
  loadExtensions(app);
  loadRoutes(app);

  return app;
};

export default createApp;
