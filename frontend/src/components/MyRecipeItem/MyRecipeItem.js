import styles from "./MyRecipeItem.module.css";

function MyRecipeItem(props) {

  const recipeId = 465;
  // TODO: get recipe id

  function deleteRecipe(){
  //   const res = Api.delete("recipe/deleteRecipe", {
  //     _id: recipeId
  //   })
  }

  return (
    <div className={styles.item}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.details}>
        <span>Author: {props.author}</span>
        <span>Date uploaded: {props.date}</span>
        <span>Catagory: {props.catagory}</span>
      </div>
      <button className={styles.editbtn}>Edit</button>
      <button className={styles.editbtn} onClick={deleteRecipe}>Delete</button>
    </div>
  );
}

export default MyRecipeItem;