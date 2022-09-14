import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "constants/queryKeys";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "constants/token";
import auth from "lib/apis/auth";

const useMe = () => {
  return useQuery(extractKey(), () => auth.getMe(), {
    enabled:
      !!localStorage.getItem(ACCESS_TOKEN_KEY) &&
      !!localStorage.getItem(REFRESH_TOKEN_KEY),
  });
};

const extractKey = () => [QUERY_KEYS.AUTH];

useMe.extractKey = extractKey;

export default useMe;
