import { FC } from "react";
import styles from "../ModuleOne/ModuleOne.module.css";

export const ModuleOne: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        <div className={styles.item}>4</div>
        <div className={styles.item}>5</div>
        <div className={styles.item}>6</div>
        <div className={styles.item}>7</div>
        <div className={styles.item}>8</div>
        <div className={styles.item}>9</div>
        <div className={styles.item}>10</div>
      </div>
    </>
  );
};
