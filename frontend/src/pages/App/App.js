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
import { BrowserRouter, Router, Outlet } from "react-router-dom";
import { AppRouter } from "../../AppRouter";
import { useState, useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        {isLoggedIn && <NavBar />}
        <AppRouter setIsLoggedIn={setIsLoggedIn} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
