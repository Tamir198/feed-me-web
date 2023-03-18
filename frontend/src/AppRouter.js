import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import Tips from "./pages/Tips/Tips";
import UploadRecipe from "./pages/Upload/UploadRecipe";
import MyRecipes from "./pages/My Recipes/MyRecipes";
import Login from "./pages/Login/Login";
import Graps from "./pages/Graphs/Graphs";
import { News } from "./pages/News/News";

export const AppRouter = ({ setIsLoggedIn }) => (
  <Suspense fallback={<>"Loading..."</>}>
    <Routes>
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/Feed" element={<Feed />} />
      <Route
        path="/Profile"
        element={<Profile setIsLoggedIn={setIsLoggedIn} />}
      />
      <Route path="/Tips" element={<Tips />} />
      <Route path="/UploadRecipe" element={<UploadRecipe />} />
      <Route path="/MyRecipes" element={<MyRecipes />} />
      <Route path="/Statistic" element={<Graps />} />
      <Route path="/News" element={<News />} />
    </Routes>
  </Suspense>
);
