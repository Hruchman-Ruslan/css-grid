import { FC } from "react";
import { useHooks } from "../../helpers";

import styles from "./Main.module.css";

export const Main: FC = () => {
  const { navigate } = useHooks();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        type="button"
        onClick={() => navigate("/module-01")}
      >
        Module-01
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={() => navigate("/module-02")}
      >
        Module-02
      </button>
    </div>
  );
};
