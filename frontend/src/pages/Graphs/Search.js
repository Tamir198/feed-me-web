import { useState } from "react";
import FeedItem from "../../components/FeedItem/FeedItem";
import { Api } from "../../services/api";

export const Search = () => {
  const [latestPostsNumber, setLatestPostsNumber] = useState(1);
  const [latestPosts, setLatestPosts] = useState([]);

  const getLatestPostsNumber = async () => {
    const res = await Api.post("http://localhost:3000/recipe/lastPosts", {
      limit: latestPostsNumber,
    });

    setLatestPosts(res.data.lastPosts);
    console.log(res.data.lastPosts);
  };
  return (
    <div>
      <p>In here you can search for data and cool things</p>
      <div className="latestPost__container">
        <p>Search up to the latest 10 posts</p>
        <input
          onChange={(e) => {
            setLatestPostsNumber(e.target.value);
          }}
          type="number"
          min="1"
          max="10"
        />
        <button onClick={getLatestPostsNumber}>Search </button>
      </div>

      <div className="latestPosts__container">
        {latestPosts.map((item) => (
          <FeedItem
            description={item.description}
            date={item.createdAt}
            catagory={item.category}
            title={item.title}
          />
        ))}
      </div>

      <button onClick={() => setLatestPosts([])}>Reset Research </button>
    </div>
  );
};
