import styles from "./FactItem.module.css"

function FactItem(props) {
  return <div className={styles.item}>
    {props.description}
  </div>;
}

export default FactItem;
