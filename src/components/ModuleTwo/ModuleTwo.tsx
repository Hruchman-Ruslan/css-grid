import { FC } from "react";

import styles from "./ModuleTwo.module.css";

export const ModuleTwo: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={`${styles.item} ${styles.header}`}>Header</header>
        <main className={`${styles.item} ${styles.main}`}>Main</main>
        <aside className={`${styles.item} ${styles.aside}`}>Aside</aside>
        <footer className={`${styles.item} ${styles.footer}`}>Footer</footer>
      </div>
    </>
  );
};
