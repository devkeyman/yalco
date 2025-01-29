import styles from "./ButtonA.module.css";

function ButtonA() {
  console.log(styles);
  return <button className={styles.button}>Button A</button>;
}

export default ButtonA;
