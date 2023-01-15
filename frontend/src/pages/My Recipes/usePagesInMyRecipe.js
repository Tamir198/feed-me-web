import { useState, useEffect } from "react";
import { Api } from "../../services/api";

export const usePagesInMyRecipe = () => {
  const [totalRecipesNumber, setTotalRecipesNumber] = useState(0);
  const [usersRecipes, setUsersRecipes] = useState([]);

  const getRecipesNumber = async () => {
    //TODO replace id with generic userId that we want to get his requests
    const res = await Api.get(`/recipe/getAllUserRecipes:`, {
      params: { id: "63c2aca810aa10ed160be949" },
    });
    setTotalRecipesNumber(res.data.userRecipes.length / 5);
    setUsersRecipes(res.data.userRecipes);
  };

  useEffect(() => {
    getRecipesNumber();
  }, []);

  return [totalRecipesNumber, usersRecipes];
};
