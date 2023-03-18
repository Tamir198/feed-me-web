import styles from "./FeedItem.module.css";

function FeedItem(props) {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.details}>
        <span>Date uploaded: {props.date}</span>
        <span>Catagory: {props.catagory}</span>
      </div>
    </div>  
  );
}

export default FeedItem;
