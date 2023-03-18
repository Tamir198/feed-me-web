import styles from "./LoginMenu.module.css";
import { useEffect, useRef, useState } from "react";
import { Api } from "../../services/api";
import { Link, NavLink } from "react-router-dom";
import { Router, useNavigate, Routes, navigate, Route } from "react-router-dom";

function LoginMenu({ setIsLoggedIn }) {
  const currentUser = {
    isLoggedIn: false,
    userId: "",
    useremail: "",
    userName: "",
    userFbId: "",
  };

  const [userEmail, setuserEmail] = useState("");
  const [userPass, setuserPass] = useState("");
  const navigate = useNavigate();

  async function createUser() {
    const res = await Api.post("/user/newUser", {
      email: userEmail,
      password: userPass,
    });
    currentUser.userId = res.data._id;
    currentUser.useremail = userEmail;
    currentUser.userName = res.data.name;
    currentUser.userFbId = res.data.firebaeId;
    currentUser.isLoggedIn = true;
    localStorage.setItem(currentUser.isLoggedIn, JSON.stringify(currentUser));

    console.log(currentUser);
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
    navigate("/Feed", { replace: true });
  }

  // for existing but not logged in users
  async function logIn() {
    let res;
    try {
      res = await Api.post("user/existingUser", {
        email: userEmail,
        password: userPass,
      });
    } catch (error) {
      console.log(error);
    }

    let user = res.data;
    console.log(res.data);
    // go to Feed only if the user exists
    if (res.data.id !== undefined) {
      currentUser.isLoggedIn = true;
      currentUser.useremail = user.email;
      currentUser.userName = user.name;
      currentUser.userId = user.id;
      currentUser.userFbId = user.firebaeId;
      setIsLoggedIn(true);
      localStorage.setItem(currentUser.isLoggedIn, JSON.stringify(currentUser));
      navigate("/Feed", { replace: true });
    } else {
      alert("User does not exist. please register first");
    }
  }

  return (
    <div className="form">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setuserEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setuserPass(e.target.value)}
      />
      <div className={styles.registration_buttons}>
        <button onClick={logIn} type="submit">
          Login
        </button>
        <button onClick={createUser}>Register</button>
      </div>
    </div>
  );
}

export default LoginMenu;
