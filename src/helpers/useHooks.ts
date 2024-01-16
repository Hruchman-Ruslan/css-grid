import { useNavigate } from "react-router";

export const useHooks = () => {
  const navigate = useNavigate();

  return { navigate };
};
