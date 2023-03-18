import styles from "./MyRecipeItem.module.css";
import { Api } from "../../services/api";
import { Router, useNavigate, Routes, navigate, Route } from "react-router-dom";


function MyRecipeItem(props) {

  const navigate = useNavigate();
  const recipeId = props.recipeId;

  function deleteRecipe(){
    const res = Api.delete("/recipe/deleteRecipe", {
      data: { _id: recipeId}
    })
    window.location.reload();
  }

  return (
    <div className={styles.item}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.details}>
        <span>Date uploaded: {props.date}</span>
        <span>Catagory: {props.catagory}</span>
      </div>
      <button className={styles.editbtn}>Edit</button>
      <button className={styles.editbtn} onClick={deleteRecipe}>Delete</button>
    </div>
  );
}

export default MyRecipeItem;