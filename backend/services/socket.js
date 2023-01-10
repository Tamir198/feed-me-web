import { Server } from "socket.io";
import { VALUES } from "../constants/values.js";

const io = new Server(VALUES.SOKET_PORT);

export const openSocket = () => {
  io.on("connection", (socket) => {
    console.log("user connected! socket id:", socket.id);
  });
};
