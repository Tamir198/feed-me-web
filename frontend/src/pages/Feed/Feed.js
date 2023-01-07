import FeedItem from "../../components/FeedItem/FeedItem";
import "./Feed.module.css";

function Feed() {
  return (
    <div>
      <FeedItem
        title="pasta"
        description="boil pasta and make sauce"
        author="Danielle"
        date="7.1.23"
        catagory="Dairy"
      />
    </div>
  );
}

export default Feed;
