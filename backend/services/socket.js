import { Server } from "socket.io";
import { VALUES } from "../constants/values.js";

export const io = new Server(VALUES.SOKET_PORT, {
  cors: {
    origin: "*",
  },
});

export const openSocket = () => {
  // io.set("origins", "*:*");

  io.on("connection", (socket) => {
    console.log("user connected! socket id:", socket.id);
    io.emit("recipeAdded", "8");
  });
};
