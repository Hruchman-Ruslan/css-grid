import { ChangeEvent, FC, useState } from "react";

import styles from "../ModuleOne/ModuleOne.module.css";

export const ModuleOne: FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [gap, setGap] = useState<string>("");
  const [columns, setColumns] = useState<string>("3");

  const handleClick = () => {
    setItems((prevState) => [...prevState, `${prevState.length + 1}`]);
  };

  const handleDelete = () => {
    setItems((prevState) => prevState.slice(0, -1));
  };

  const onChangeGap = (e: ChangeEvent<HTMLInputElement>) => {
    setGap(e.target.value);
  };

  const onChangeColumns = (e: ChangeEvent<HTMLInputElement>) => {
    setColumns(e.target.value);
  };

  return (
    <>
      <div
        className={styles.container}
        style={{
          gap: `${gap}px`,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            {item}
          </div>
        ))}
      </div>

      <div className={styles.buttonBox}>
        <button className={styles.button} type="button" onClick={handleClick}>
          Add item
        </button>

        <button className={styles.button} type="button" onClick={handleDelete}>
          Delete item
        </button>
      </div>

      <div className={styles.inputBox}>
        <label className={styles.label}>
          Gap:
          <input
            className={styles.input}
            type="text"
            onChange={onChangeGap}
            value={gap}
            placeholder="gap"
          />
        </label>

        <label className={styles.label}>
          grid-template-columns: repeat(?, 1fr);
          <input
            className={styles.input}
            type="text"
            onChange={onChangeColumns}
            value={columns}
            placeholder="columns with 1fr"
          />
        </label>
      </div>
    </>
  );
};
