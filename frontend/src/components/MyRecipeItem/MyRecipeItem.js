import styles from "./MyRecipeItem.module.css";
import { Api } from "../../services/api";

import { useState } from "react";
function MyRecipeItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const recipeId = "63bd6a99ab75a01e21d526d7";
  // TODO: get recipe id (not hard coded)

  function deleteRecipe() {
    const res = Api.delete("/recipe/deleteRecipe", {
      data: { _id: recipeId },
    });
  }

  function updateRecipe() {
    Api.post("/recipe/updateSingleRecipe", {
      id: props.id,
      title,
      description,
    });
  }

  function handleTitleChange(event) {
    setTitle(event.target.textContent);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.textContent);
  }

  return (
    <div className={styles.item}>
      <div
        contentEditable={isEditing ? "true" : "false"}
        className={styles.title}
        onInput={handleTitleChange}
      >
        {props.title}
      </div>
      <div
        contentEditable={isEditing ? "true" : "false"}
        className={styles.description}
        onInput={handleDescriptionChange}
      >
        {props.description}
      </div>
      <div className={styles.details}>
        <span>Author: {props.author}</span>
        <span>Date uploaded: {props.date}</span>
        <span>Catagory: {props.catagory}</span>
      </div>

      {isEditing && (
        <div>
          <button
            onClick={() => {
              updateRecipe();
              setIsEditing(false);
            }}
          >
            Save changes
          </button>
        </div>
      )}

      <button className={styles.editbtn} onClick={() => setIsEditing(true)}>
        Edit
      </button>
      <button className={styles.editbtn} onClick={deleteRecipe}>
        Delete
      </button>
    </div>
  );
}

export default MyRecipeItem;
