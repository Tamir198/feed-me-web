import styles from "./UploadRecipe.module.css";

function UploadRecipe() {
  return (
    <div className={styles.upload}>
      <input type="text" placeholder="Title"></input>
      <textarea
        className={styles.recipe}
        type="text"
        placeholder="Recipe"
      ></textarea>
      <button>Post Recipe</button>
    </div>
  );
}

export default UploadRecipe;
