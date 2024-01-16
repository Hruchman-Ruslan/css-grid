import { FC } from "react";
import { useHooks } from "../../helpers";

export const Main: FC = () => {
  const { navigate } = useHooks();

  return (
    <>
      <button type="button" onClick={() => navigate("/module-01")}>
        Module-01
      </button>
    </>
  );
};
