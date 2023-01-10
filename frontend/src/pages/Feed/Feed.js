import FeedItem from "../../components/FeedItem/FeedItem";
import styles from "./Feed.module.css";

function Feed() {
  return (
    <div>
      <FeedItem
        title="Pasta"
        description="Boil pasta and make sauce"
        author="Danielle"
        date="7.1.23"
        catagory="Dairy"
      />
      <FeedItem
        title="Burger"
        description="Order from walt"
        author="Tamir"
        date="7.1.23"
        catagory="meat"
      />
    </div>
  );
}

export default Feed;
