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
    userFbId: "",
  };

  const userEmail = useRef(null);
  const userPass = useRef(null);
  const navigate = useNavigate();

  async function createUser() {
    const res = await Api.post("user/newUser", {
      email: userEmail.current.value,
      password: userPass.current.value,
    });
    console.log(res);
    localStorage.setItem(userEmail.current.value, JSON.stringify(res.data));
    currentUser.userId = res.data._id;
    currentUser.useremail = res.data.email;
    currentUser.userFbId = res.data.firebaeId;
    currentUser.isLoggedIn = true;
    console.log(currentUser);
    //Save the user details like this
    // currentUser: {...} 
    setIsLoggedIn(true);
    navigate("/Feed", { replace: true });
  }

  return (
    <div className="form">
      <input type="email" placeholder="Email" ref={userEmail} />
      <input type="password" placeholder="Password" ref={userPass} />
      <div className={styles.registration_buttons}>
        <button type="submit">Login</button>
        <button onClick={createUser}>Register</button>
      </div>
      {/* <Routes>
          <Route
            path="/"
            element={currentUser.isLoggedIn && <Navigate to="/Feed" />}
           />
        </Routes> */}
    </div>
  );
}

export default LoginMenu;
