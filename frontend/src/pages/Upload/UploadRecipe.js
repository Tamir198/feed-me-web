import { useState } from "react";
import styles from "./UploadRecipe.module.css";
import { Api } from "../../services/api";


function UploadRecipe() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [catagory, setCatagory] = useState("")
  

  async function uploadRecipe(){
    // check if id is correct
    // const userId = JSON.parse(localStorage.getItem("true")).id
    // console.log(userId + ", " + title + ", " + description + ", " + catagory);
    console.log(title + ", " + description + ", " + catagory);

    const res = await Api.post("user/existingUser", {
      userId: "",
      title: title,
      description: description,
      category: catagory
    });

    if(res.data === "OK")
      alert("Recipe uploaded successfully!")
    else
      alert("Recipe failed to upload, please try again")

      //TODO: get userId, check why recipe is not uploading correctly

  }


  return (
    <div className={styles.upload}>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}></input>
      <textarea
        className={styles.recipe}
        type="text"
        placeholder="Recipe"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      {/* <label for="catagory">Catagory:</label> */}
      <select className={styles.options} id="catagory" onChange={(e) => setCatagory(e.target.value)}>
        <option value="Meat">Meat</option>
        <option value="Dairy">Dairy</option>
        <option value="Vegan">Vegan</option>
      </select>
      <button onClick={uploadRecipe}>Post Recipe</button>
    </div>
  );
}

export default UploadRecipe;
