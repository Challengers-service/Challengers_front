import { createSearchParams, useNavigate } from "react-router-dom";
import { useMemo } from "react";

export function useInternalRouter() {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      goBack() {
        navigate(-1);
      },
      push(path: RoutePath, search?: Record<string, string>) {
        if (!search) navigate(path);
        else
          navigate({
            pathname: path,
            search: `?${createSearchParams(search)}`,
          });
      },
    };
  }, [navigate]);
}

export type RoutePath =
  | "/"
  | "/join"
  | "/login"
  | "/create-challenge/one"
  | "/create-challenge/two"
  | "/create-challenge/three"
  | "/create-challenge/finish"
  | "/search"
  | "/search/new";
