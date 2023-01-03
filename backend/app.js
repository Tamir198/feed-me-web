import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.js";

const loadExtensions = async function (app) {
  app.use(cors("*"));
  app.use(express.json());
};

const loadRoutes = function (app) {
  app.use(usersRoutes);
};

const createApp = () => {
  const app = express();
  loadExtensions(app);
  loadRoutes(app);

  return app;
};

export default createApp;
