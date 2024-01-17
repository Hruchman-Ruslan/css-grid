import { ChangeEvent, FC, useState } from "react";

import styles from "../ModuleOne/ModuleOne.module.css";

export const ModuleOne: FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [displayStyle, setDisplayStyle] = useState<string>("grid");
  const [columnStyle, setColumnStyle] = useState<string>("");
  const [rowStyle, setRowStyle] = useState<string>("");

  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      `Container #${prevItems.length + 1}`,
    ]);
  };

  const handleColumnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColumnStyle(e.target.value);
  };

  const handleRowInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRowStyle(e.target.value);
  };

  const reset = () => {
    setColumnStyle("");
    setRowStyle("");
    setDisplayStyle("grid");
    setItems([]);
  };

  return (
    <>
      <ul className={styles.listBox}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: displayStyle,
              gridTemplateColumns: `${columnStyle}px`,
              gridTemplateRows: `${rowStyle}px`,
              overflow: "hidden",
            }}
          >
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
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>

      <div className={styles.inputBox} style={{ flexDirection: "column" }}>
        <div className={styles.labelBox}>
          <label className={styles.label}>
            grid-template-columns
            <input
              type="text"
              className={styles.input}
              placeholder="column"
              value={columnStyle}
              onChange={handleColumnInputChange}
            />
          </label>
        </div>
        <div className={styles.labelBox}>
          <label className={styles.label}>
            grid-template-rows
            <input
              type="text"
              className={styles.input}
              style={{ marginLeft: "35px" }}
              placeholder="row"
              value={rowStyle}
              onChange={handleRowInputChange}
            />
          </label>
        </div>
      </div>
    </>
  );
};
