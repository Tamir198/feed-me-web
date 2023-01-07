import Feed from "./pages/Feed"
import Facts from "./pages/Facts"
import Login from "./pages/Login"
import MyRecipes from "./pages/MyRecipes"
import Profile from "./pages/Profile"
import UploadRecipe from "./pages/UploadRecipe"
import NavBar from "./components/NavBar"
import Header from "./components/Header"


function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Feed />
    </>
  );
}

export default App;
