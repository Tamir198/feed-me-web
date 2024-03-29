import styles from "./NavBar.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import UploadRecipe from "../../pages/Upload/UploadRecipe";
import Feed from "../../pages/Feed/Feed";
import Tips from "../../pages/Tips/Tips";
import MyRecipes from "../../pages/My Recipes/MyRecipes";
import Graps from "../../pages/Graphs/Graphs";

function NavBar() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link
            style={{ textDecoration: "none", backgroundColor: "#95cac8" }}
            to="/Feed"
          >
            Feed
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", backgroundColor: "#95cac8" }}
            to="/Profile"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", backgroundColor: "#95cac8" }}
            to="/Tips"
          >
            Fun Tips
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", backgroundColor: "#95cac8" }}
            to="/UploadRecipe"
          >
            Upload recipe
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", backgroundColor: "#95cac8" }}
            to="/MyRecipes"
          >
            My Recipes
          </Link>
        </li>

        <li>
          <Link
            style={{ textDecoration: "none", backgroundColor: "#95cac8" }}
            to="/Statistic"
          >
            Statistic
          </Link>
        </li>

        <li>
          <Link
            style={{ textDecoration: "none", backgroundColor: "#95cac8" }}
            to="/News"
          >
            News
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
