import React, { useState, useEffect } from "react";

import io from "socket.io-client";
import styles from "./Footer.module.css";

export const Footer = () => {
  const socket = io("http://localhost:4000");

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [recepiesNumber, setrecepiesNumber] = useState();

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("recipeAdded", (totalRecipe) => {
      console.log("reicpe add from socket!!");
      setrecepiesNumber(totalRecipe);
    });

    return () => {
      socket.off("connect");
    };
  }, [socket]);

  return (
    <div className={styles.footer__container}>
      {isConnected && <p>Total recipes in the website : {recepiesNumber} </p>}
    </div>
  );
};
