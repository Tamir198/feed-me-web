import MyRecipeItem from "../../components/MyRecipeItem/MyRecipeItem";
import styles from "./MyRecipes.module.css";

function MyRecipes() {
  return (
    <div>
      <MyRecipeItem
        title="Pasta"
        description="Boil pasta and make sauce"
        author="Danielle"
        date="7.1.23"
        catagory="Dairy"
      />
      <MyRecipeItem
        title="Pizza"
        description="Make dough, tomato sauce and add Mozarella"
        author="Danielle"
        date="8.1.23"
        catagory="Dairy"
      />
    </div>
  );
}

export default MyRecipes;
