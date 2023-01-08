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
      {/* <label for="catagory">Catagory:</label> */}
      <select className={styles.options} id="catagory">
        <option value="Meat">Meat</option>
        <option value="Dairy">Dairy</option>
        <option value="Vegan">Vegan</option>
      </select>
      <button>Post Recipe</button>
    </div>
  );
}

export default UploadRecipe;
