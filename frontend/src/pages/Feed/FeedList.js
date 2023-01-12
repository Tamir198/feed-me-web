import React from "react";

import FeedItem from "../../components/FeedItem/FeedItem";
import { Api } from "../../services/api";
import { useState, useEffect } from "react";

export const FeedList = ({ currPage }) => {
  const [recipes, setRecipes] = useState([]);

  const getRecipesPage = async () => {
    const res = await Api.post("/recipe/getRecipes", { page: "" + currPage });
    //TODO fix axios request error when returning to first page
    setRecipes(res.data);
  };

  useEffect(() => {
    getRecipesPage();
  }, [currPage]);

  return (
    <div>
      {recipes.map(({ title, description, category, createdAt } = recipes) => (
        <FeedItem
          title={title}
          description={description}
          author="Danielle"
          date={createdAt}
          catagory={category}
        />
      ))}
    </div>
  );
};
