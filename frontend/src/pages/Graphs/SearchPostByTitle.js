import { useState } from "react";
import FeedItem from "../../components/FeedItem/FeedItem";
import { Api } from "../../services/api";

export const SearchPostByTitle = () => {
  const [title, setTitle] = useState("second");
  const [foundObject, setFoundObject] = useState(null);

  const findPostByTitle = async () => {
    const res = await Api.post("http://localhost:3000/recipe/searchByTitle", {
      title: title,
    });
    if (res.data.length !== 0) {
      debugger;
      setFoundObject(res.data[0]);
    } else {
      setFoundObject(null);
    }
  };
  return (
    <div>
      <p>Search for post by its title</p>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={findPostByTitle}>Search post by its title</button>
      {foundObject && (
        <FeedItem
          description={foundObject.description}
          date={foundObject.createdAt}
          catagory={foundObject.category}
          title={foundObject.title}
        />
      )}
    </div>
  );
};
