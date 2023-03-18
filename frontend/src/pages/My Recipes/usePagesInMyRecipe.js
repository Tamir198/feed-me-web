import { useState, useEffect } from "react";
import { Api } from "../../services/api";

export const usePagesInMyRecipe = () => {
  const [totalRecipesNumber, setTotalRecipesNumber] = useState(0);
  const [usersRecipes, setUsersRecipes] = useState([]);

  const getRecipesNumber = async () => {
    const currUserId = JSON.parse(localStorage.getItem("true")).userId;
    const res = await Api.get(`/recipe/getAllUserRecipes`, {
      params: { id: currUserId },
    });
    setTotalRecipesNumber(res.data.userRecipes.length / 5);
    setUsersRecipes(res.data.userRecipes);
  };

  useEffect(() => {
    getRecipesNumber();
  }, []);

  return [totalRecipesNumber, usersRecipes];
};
