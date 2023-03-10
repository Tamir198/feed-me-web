import { useState } from "react";
import styles from "./UploadRecipe.module.css";
import { Api } from "../../services/api";

function UploadRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [catagory, setCatagory] = useState("");

  async function uploadRecipe() {
    const userId = JSON.parse(localStorage.getItem("true")).userId;
    console.log(userId + ", " + title + ", " + description + ", " + catagory);

    //todo check why this code for creating new user is here
    //This is a method to upload new recipe and not create user
    const res = await Api.post("recipe/addRecipe", {
      userId: userId,
      title: title,
      author: JSON.parse(localStorage.getItem("true")).useremail,
      description: description,
      category: catagory,
    });

    if (res.status === 200)
      //OK
      alert("Recipe uploaded successfully!");
    else alert("Recipe failed to upload, please try again");
  }

  return (
    <div className={styles.upload}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <textarea
        className={styles.recipe}
        type="text"
        placeholder="Recipe"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <select
        className={styles.options}
        id="catagory"
        onChange={(e) => setCatagory(e.target.value)}
      >
        <option value="Meat">Meat</option>
        <option value="Dairy">Dairy</option>
        <option value="Vegan">Vegan</option>
      </select>
      <button onClick={uploadRecipe}>Post Recipe</button>
    </div>
  );
}

export default UploadRecipe;
