import React from "react";

import FeedItem from "../../components/FeedItem/FeedItem";
import { Api } from "../../services/api";
import { useState, useEffect } from "react";

export const FeedList = ({ currPage }) => {
  const [recipes, setRecipes] = useState([]);

  const getRecipesPage = async () => {
    const res = await Api.post("/recipe/getRecipes", { page: "" + currPage });

    console.log(res.data);
    setRecipes(res.data);
  };

  useEffect(() => {
    getRecipesPage();
  }, []);

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
