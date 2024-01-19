import { FC } from "react";

import styles from "./ModuleTwo.module.css";

export const ModuleTwo: FC = () => {
  return (
    <>
      {/* step-one */}
      <div className={`${styles.container} ${styles.one}`}>
        <header className={`${styles.item} ${styles.header}`}>Header</header>
        <main className={`${styles.item} ${styles.main}`}>Main</main>
        <aside className={`${styles.item} ${styles.aside}`}>Aside</aside>
        <footer className={`${styles.item} ${styles.footer}`}>Footer</footer>
      </div>
      {/* step-two */}
      <div className={`${styles.container}  ${styles.two}`}>
        <div className={`${styles.item} `}>item 1</div>
        <div className={`${styles.item} `}>item 2</div>
        <div className={`${styles.item} `}>item 3</div>
        <div className={`${styles.item} `}>item 4</div>
      </div>
      {/* step-three */}
      <div className={`${styles.container}  ${styles.three}`}>
        <div className={`${styles.item} `}>item 1</div>
        <div className={`${styles.item} `}>item 2</div>
        <div className={`${styles.item} `}>item 3</div>
        <div className={`${styles.item} `}>item 4</div>
      </div>
    </>
  );
};
