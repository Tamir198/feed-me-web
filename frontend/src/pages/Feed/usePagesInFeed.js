import { Api } from "../../services/api";
import { useState, useEffect } from "react";
import { TEXTS } from "../../constants/texts";

export const usePagesInFeed = () => {
  const [totalRecipesNumber, setTotalRecipesNumber] = useState(0);

  const getRecipesNumber = async () => {
    const res = await Api.get("recipe/getRecipesNumber");
    setTotalRecipesNumber(res.data.recipesNum / TEXTS.recipesPerPage);
  };

  useEffect(() => {
    getRecipesNumber();
  }, []);

  return totalRecipesNumber;
};
