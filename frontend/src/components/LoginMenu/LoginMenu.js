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

  const [userEmail, setuserEmail] = useState("");
  const [userPass, setuserPass] = useState("");
  const navigate = useNavigate();

  async function createUser() {
    const res = await Api.post("/user/newUser", {
      email: userEmail,
      password: userPass,
    });
    // get from res only the id of the user
    // save user in local storage with the key isLoggedIn
    // localStorage.setItem("true", JSON.stringify(res.data));
    currentUser.userId = res.data._id;
    currentUser.useremail = userEmail;
    currentUser.userFbId = res.data.firebaeId;
    currentUser.isLoggedIn = true;
    localStorage.setItem(currentUser.isLoggedIn, JSON.stringify(currentUser));

    // let currentUser: {true, res.data._id, res.data.email, res.data.firebaeId}
    console.log(currentUser);
    //Save the user details like this
    // currentUser: {...}
    setIsLoggedIn(true);
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

      debugger;
    } catch (error) {
      console.log(error);
      debugger;
    }

    // let user = JSON.parse(localStorage.getItem("true"))
    let user = res.data;
    console.log(res.data);
    // go to Feed only if the user exists
    if (res.data.id !== undefined) {
      currentUser.isLoggedIn = true;
      currentUser.useremail = user.email;
      currentUser.userId = user.id;
      currentUser.userFbId = user.firebaeId;
      setIsLoggedIn(true);
      localStorage.setItem(currentUser.isLoggedIn, JSON.stringify(currentUser));
      navigate("/Feed", { replace: true });
    } else {
      alert("User does not exist. please register first");
    }
  }

  //TODO: on createUser - user is not saved in the local storage
  //login: can't find existing user. always returns "user not exists".
  // probably "createUser" doesnt save user in the DB??
  // what is the structure of a User document? password is saved?

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
