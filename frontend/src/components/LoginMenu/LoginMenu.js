import styles from "./LoginMenu.module.css";
import {useEffect, useRef, useState} from "react"
import { Api } from "../../services/api";
import { Navigate } from "react-router-dom";

function LoginMenu() {

  const currentUser = {
    isLoggedIn: false,
    userId: '',
    useremail: '',
    userFbId: ''
  }

  const userEmail = useRef(null)
  const userPass = useRef(null)

  async function createUser(){
    const res = await Api.post("user/newUser", {
      email: userEmail.current.value,
      password: userPass.current.value
    })
    console.log(res)
    localStorage.setItem(userEmail.current.value, JSON.stringify(res.data))
    currentUser.isLoggedIn = true;
    currentUser.userId = res.data._id;
    currentUser.useremail = res.data.email;
    currentUser.userFbId = res.data.firebaeId;
    console.log(currentUser)

  }

  // TODO: use currentUser to redirect to home page or not (useEffect)

  return (
    <div className="form" >
      <input type="email" placeholder="Email" ref={userEmail} />
      <input type="password" placeholder="Password" ref={userPass} />
      <button type="submit">Login</button>
      <button onClick={createUser}>Register</button>
    </div>
  );
}

export default LoginMenu;
