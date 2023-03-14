import { useState } from "react";
import FeedItem from "../../components/FeedItem/FeedItem";
import { Api } from "../../services/api";
import { PostsDateSearch } from "./PostsDateSearch";
import { RecentPosts } from "./RecentPosts";
import { SearchPostByTitle } from "./SearchPostByTitle";

export const Search = () => {
  return (
    <div>
      <RecentPosts />
      <PostsDateSearch />
      <SearchPostByTitle />
    </div>
  );
};
