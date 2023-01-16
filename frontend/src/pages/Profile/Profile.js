import styles from "./Profile.module.css";
import { Api } from "../../services/api";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import MyRecipes from "../My Recipes/MyRecipes";

function Profile() {
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
      navigate("/Feed", { replace: true });
    } else {
      console.log(res);
    }

    // make sure this works (because i cant save users in the first place)
  }

  return (
    <div className={styles.profile}>
      <input type="text" placeholder="Enter new name" />
      <button>Save changes</button>
      <button>Logout</button>
      <button onClick={deleteUser}>Delete account</button>
    </div>
  );
}

export default Profile;
