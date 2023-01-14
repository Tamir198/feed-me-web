import ReactPaginate from "react-paginate";
import { FeedList } from "./FeedList";
import { useState } from "react";
import { usePagesInFeed } from "./usePagesInFeed";

function Feed() {
  const [currPage, setCurrPage] = useState(0);
  const totalRecipesNumber = usePagesInFeed();

  return (
    <div>
      <FeedList currPage={currPage} />

      <ReactPaginate
        nextLabel="Next"
        previousLabel="Previous"
        onPageChange={(selected) => setCurrPage(selected.selected)}
        pageRangeDisplayed={10}
        marginPagesDisplayed={10}
        pageCount={totalRecipesNumber}
        breakLabel="..."
      />
    </div>
  );
}

export default Feed;
