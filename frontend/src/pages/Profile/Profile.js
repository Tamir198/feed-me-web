import styles from "./Profile.module.css";
import { Api } from "../../services/api";
import { useEffect, useRef, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import MyRecipes from "../My Recipes/MyRecipes";

function Profile({setIsLoggedIn}) {
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("true")).userId;

  async function deleteUser() {
    const res = await Api.delete("user/deleteUser", {
      data: {
        uid: userId,
      },
    });

    if (res.status === 200) {
      alert("User deleted");
      setIsLoggedIn(false);
      navigate("/", { replace: true });
    } else {
      console.log(res);
    }

  }

  //TODO: check if logout works after fixing the login
  function logoutUser(){
    localStorage.removeItem("true");
    navigate("/", {replace: true})
    setIsLoggedIn(false);
  }

  return (
    <div className={styles.profile}>
      <input type="text" placeholder="Enter new name" />
      <button>Save changes</button>
      <button onClick={logoutUser}>Logout</button>
      <button onClick={deleteUser}>Delete account</button>
    </div>
  );
}

export default Profile;
