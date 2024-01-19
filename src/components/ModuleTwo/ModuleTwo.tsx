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
      {/* step-four */}
      <div className={`${styles.container}  ${styles.four}`}>
        <div className={`${styles.item} ${styles.fourHeader}`}>Header</div>
        <div className={`${styles.item} ${styles.fourMain}`}>Main</div>
        <div className={`${styles.item} ${styles.fourSidebar}`}>Sidebar</div>
        <div className={`${styles.item} ${styles.fourFooter}`}>Footer</div>
      </div>
      {/* step-five */}
      <div className={`${styles.container}  ${styles.five}`}>
        <div className={`${styles.item} `}>Item 1</div>
        <div className={`${styles.item}`}>Item 2</div>
        <div className={`${styles.item} `}>Item 3</div>
        <div className={`${styles.item} ${styles.self}`}>Item 4</div>
        <div className={`${styles.item} `}>Item 5</div>
        <div className={`${styles.item}`}>Item 6</div>
        <div className={`${styles.item} `}>Item 7</div>
        <div className={`${styles.item}`}>Item 8</div>
        <div className={`${styles.item} `}>Item 9</div>
        <div className={`${styles.item}`}>Item 10</div>
      </div>
      {/* step-six */}
      <div className={`${styles.container}  ${styles.six}`}>
        <div className={`${styles.itemSix} ${styles.itemS}`}>
          <img
            src="https://wiki.dave.eu/images/thumb/4/47/Placeholder.png/1200px-Placeholder.png"
            alt="placeholder"
            width="100"
          />
          <div>
            <h2> Blog Title</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className={`${styles.itemSix} ${styles.itemS}`}>
          <img
            src="https://wiki.dave.eu/images/thumb/4/47/Placeholder.png/1200px-Placeholder.png"
            alt="placeholder"
            width="100"
          />
          <div>
            <h2> Blog Title</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className={`${styles.itemSix} ${styles.itemS}`}>
          <img
            src="https://wiki.dave.eu/images/thumb/4/47/Placeholder.png/1200px-Placeholder.png"
            alt="placeholder"
            width="100"
          />
          <div>
            <h2> Blog Title</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className={`${styles.itemSix} ${styles.itemS}`}>
          <img
            src="https://wiki.dave.eu/images/thumb/4/47/Placeholder.png/1200px-Placeholder.png"
            alt="placeholder"
            width="100"
          />
          <div>
            <h2> Blog Title</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </>
  );
};
