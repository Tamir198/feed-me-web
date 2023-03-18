import ReactPaginate from "react-paginate";
import React, { useState, useEffect } from "react";
import { Api } from "../../services/api";
import FeedItem from "../../components/FeedItem/FeedItem";
import MyRecipeItem from "../../components/MyRecipeItem/MyRecipeItem";

export const MyRecipeList = ({ currPage, usersRecipes }) => {
  return (
    <div>
      {usersRecipes.map(({ title, description, category, createdAt, _id }) => (
        <MyRecipeItem
          title={title}
          description={description}
          date={createdAt}
          catagory={category}
          recipeId = {_id}
        />
      ))}
    </div>
  );
};
