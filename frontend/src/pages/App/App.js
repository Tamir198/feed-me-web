import Feed from "../Feed/Feed";
import Facts from "../Facts/Facts";
import Login from "../Login/Login";
import MyRecipes from "../My Recipes/MyRecipes";
import Profile from "../Profile/Profile";
import UploadRecipe from "../Upload/UploadRecipe";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Feed />
    </div>
  );
}

export default App;
