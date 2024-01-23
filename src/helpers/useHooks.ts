import { useNavigate, useLocation } from "react-router";

export const useHooks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return { navigate, location };
};
