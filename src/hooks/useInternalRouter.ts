import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

export function useInternalRouter() {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      goBack() {
        navigate(-1);
      },
      push(path: RoutePath) {
        navigate(path);
      },
    };
  }, [navigate]);
}

type RoutePath =
  | "/"
  | "/join"
  | "/login"
  | "/create-challenge/one"
  | "/create-challenge/two"
  | "/create-challenge/three"
  | "/create-challenge/four";