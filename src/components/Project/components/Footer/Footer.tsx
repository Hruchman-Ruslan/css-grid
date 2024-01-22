import { FC } from "react";

import cat from "../../images/cat.svg";

import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerContainer}`}>
        <img src={cat} alt="cat" className={styles.logo} />
        <h2 className={styles.label}>Котодім</h2>
      </div>
    </footer>
  );
};
