import { useState } from "react";

export const useCurrPage = ({ startingPageNum }) => {
  const [currPage, setCurrPage] = useState(startingPageNum);

  console.log("Page was changed");

  const handlePageClick =
    (({ selected }) => {
      setCurrPage(selected + 1);
    },
    []);

  return { currPage, handlePageClick };
};
