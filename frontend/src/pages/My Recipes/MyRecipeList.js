import ReactPaginate from "react-paginate";
import React, { useState, useEffect } from "react";
import { Api } from "../../services/api";
import FeedItem from "../../components/FeedItem/FeedItem";
import MyRecipeItem from "../../components/MyRecipeItem/MyRecipeItem";

export const MyRecipeList = ({ currPage, usersRecipes }) => {
  console.log(usersRecipes);
  return (
    <div>
      {usersRecipes.map(
        ({ title, description, category, createdAt, author }) => (
          <MyRecipeItem
            title={title}
            description={description}
            date={createdAt}
            author={"Change this to author"}
            category={category}
          />
        )
      )}
    </div>
  );
};
