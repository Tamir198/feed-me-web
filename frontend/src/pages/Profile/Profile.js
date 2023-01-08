import styles from "./Profile.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import MyRecipes from "../My Recipes/MyRecipes";

function Profile() {
  return (
    <div className={styles.profile}>
      <input type="text" placeholder="Enter new name" />
      <button>Save changes</button>
      <button>Logout</button>
    </div>
  );
}

export default Profile;
