import styles from "./TipItem.module.css"

function TipItem(props) {
  return <div className={styles.item}>
    {props.description}
  </div>;
}

export default TipItem;
