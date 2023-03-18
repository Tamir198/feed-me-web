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

  // for name placeholder
  // let userName = JSON.parse(localStorage.getItem("true")).userName;
  const [userName, setUserName] = useState(JSON.parse(localStorage.getItem("true")).userName);
  console.log(userName);

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

  function logoutUser(){
    localStorage.removeItem("true");
    navigate("/", {replace: true})
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", false);
  }

  function handleChange(event){
    setUserName(event.target.value);
  }

  function saveChanges(event){
    // backend - need to add an option to get user's details + edit user
    let currentUser = JSON.parse(localStorage.getItem("true"));
    currentUser.userName = userName;
    localStorage.setItem("true", JSON.stringify(currentUser));
    alert("User name changed successfully!");
    navigate("/Feed", {replace: true});
  }

  return (
    <div className={styles.profile}>
      <input type="text" value={userName} onChange={handleChange} />
      <button onClick={saveChanges}>Save changes</button>
      <button onClick={logoutUser}>Logout</button>
      {/* <button onClick={deleteUser}>Delete account</button> */}
    </div>
  );
}

export default Profile;
