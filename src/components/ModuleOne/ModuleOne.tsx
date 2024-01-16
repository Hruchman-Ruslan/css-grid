import { FC, useState } from "react";

import styles from "../ModuleOne/ModuleOne.module.css";

export const ModuleOne: FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [displayStyle, setDisplayStyle] = useState<string>("grid");

  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      `Container #${prevItems.length + 1}`,
    ]);
  };

  return (
    <>
      <ul className={styles.listBox}>
        {items.map((item, index) => (
          <li key={index} style={{ display: displayStyle }}>
            <div className={styles.container}>{item}</div>
          </li>
        ))}
      </ul>

      <div className={styles.buttonBox}>
        <button type="button" onClick={addItem}>
          Add Item
        </button>
        <button type="button" onClick={() => setDisplayStyle("grid")}>
          Grid
        </button>
        <button type="button" onClick={() => setDisplayStyle("inline-grid")}>
          Inline-Grid
        </button>
      </div>
    </>
  );
};
