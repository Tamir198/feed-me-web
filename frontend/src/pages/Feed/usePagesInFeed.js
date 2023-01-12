import { Api } from "../../services/api";
import { useState, useEffect } from "react";

export const usePagesInFeed = () => {
  const [totalRecipesNumber, setTotalRecipesNumber] = useState(0);

  const getRecipesNumber = async () => {
    const res = await Api.get("recipe/getRecipesNumber");
    setTotalRecipesNumber(res.data.recipesNum / 5);
  };

  useEffect(() => {
    getRecipesNumber();
  }, []);

  return totalRecipesNumber;
};
