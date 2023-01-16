import ReactPaginate from "react-paginate";
import React, { useState, useEffect } from "react";
import { Api } from "../../services/api";
import FeedItem from "../../components/FeedItem/FeedItem";

export const MyRecipeList = ({ currPage, usersRecipes }) => {
  return (
    <div>
      {usersRecipes.map(({ title, description, category, createdAt }) => (
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
