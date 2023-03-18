import { useState } from "react";
import { usePagesInMyRecipe } from "./usePagesInMyRecipe.js";
import ReactPaginate from "react-paginate";

import { MyRecipeList } from "./MyRecipeList.js";

function MyRecipes({setIsLoggedIn}) {
  const [currPage, setCurrPage] = useState(0);
  const [totalRecipesNumber, usersRecipes] = usePagesInMyRecipe();

  return (
    <div>
      <MyRecipeList usersRecipes={usersRecipes} currPage={currPage} />

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

export default MyRecipes;
