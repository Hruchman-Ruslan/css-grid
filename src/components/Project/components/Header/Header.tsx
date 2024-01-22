import { FC } from "react";

import logo from "../../images/cat.svg";

import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <img src={logo} alt="cat" className={styles.logo} />
        <h1 className={styles.label}>Котодім</h1>
      </div>
    </header>
  );
};
