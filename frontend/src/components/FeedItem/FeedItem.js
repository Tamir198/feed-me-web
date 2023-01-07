import "./FeedItem.module.css"

function FeedItem(props) {
  return (
    <div>
      title = {props.title}
      description = {props.description}
      author = {props.author}
      date = {props.date}
      catagory = {props.catagory}
    </div>
  );
}

export default FeedItem;
