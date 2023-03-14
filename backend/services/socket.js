import { Server } from "socket.io";
import { VALUES } from "../constants/values.js";

import { getNumberOfRecipes } from "../controllers/recipeController.js";
import { Recipe } from "../models/recipeModel.js";

export const io = new Server(VALUES.SOKET_PORT, {
  cors: {
    origin: "*",
  },
});

export const openSocket = () => {
  io.on("connection", (socket) => {
    console.log("user connected! socket id:", socket.id);

    const interval = setInterval(async () => {
      try {
        let recipesNumber = await Recipe.countDocuments({});

        
        io.emit("recipes-count", recipesNumber);
      } catch (error) {
        console.log(`This is an error ${error}`);
      }
    }, 5000);

    socket.on("disconnect", () => {
      clearInterval(interval);
      console.log("user disconnected! socket id:", socket.id);
    });
  });
};
