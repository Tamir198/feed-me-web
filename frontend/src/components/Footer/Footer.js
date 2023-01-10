import React, { useState, useEffect } from "react";

import io from "socket.io-client";
import styles from "./Footer.module.css";

export const Footer = () => {
  const socket = io("http://localhost:4000");
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    return () => {
      socket.off("connect");
    };
  }, [socket]);

  return (
    <div className={styles.footer__container}>
      {isConnected ? <p>Total bla bla</p> : <p>Loading...</p>}
    </div>
  );
};
