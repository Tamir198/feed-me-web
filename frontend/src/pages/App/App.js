import Feed from "../Feed/Feed";
import Tips from "../Tips/Tips";
import Login from "../Login/Login";
import MyRecipes from "../My Recipes/MyRecipes";
import Profile from "../Profile/Profile";
import UploadRecipe from "../Upload/UploadRecipe";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";

import "./App.css";
import LoginMenu from "../../components/LoginMenu/LoginMenu";
import { Footer } from "../../components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      {/* <Feed /> */}
      {/* <Facts /> */}
      {/* <LoginMenu /> */}
      <Footer />
    </div>
  );
}

export default App;
