import FeedItem from "../../components/FeedItem/FeedItem";
import styles from "./Feed.module.css";
import ReactPaginate from "react-paginate";

import { Api } from "../../services/api";
import { useCurrPage } from "./useCurrPage";
import { useEffect, useState } from "react";
import { FeedList } from "./FeedList";

function Feed() {
  const { currPage, handlePageClick } = useCurrPage(1);
  const [totalRecipesNumber, setTotalRecipesNumber] = useState(0);

  const getRecipesNumber = async () => {
    const res = await Api.get("recipe/getRecipesNumber");
    setTotalRecipesNumber(res.data.recipesNum / 5);
  };

  useEffect(() => {
    getRecipesNumber();
  }, []);

  return (
    <div>
      <FeedList currPage={currPage} />

      <ReactPaginate
        nextLabel="Next"
        previousLabel="Previous"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        marginPagesDisplayed={10}
        pageCount={totalRecipesNumber}
        breakLabel="..."
      />
    </div>
  );
}

export default Feed;
