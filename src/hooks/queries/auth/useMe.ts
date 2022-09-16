import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "constants/queryKeys";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "constants/token";
import auth from "lib/apis/auth";
import { UseQueryOptionsOf } from "lib/type";

const useMe = (options: UseQueryOptionsOf<typeof auth.getMe> = {}) => {
  return useQuery(extractKey(), () => auth.getMe(), {
    enabled:
      !!localStorage.getItem(ACCESS_TOKEN_KEY) &&
      !!localStorage.getItem(REFRESH_TOKEN_KEY),
    ...options,
  });
};

const extractKey = () => [QUERY_KEYS.AUTH, "me"];

useMe.extractKey = extractKey;

export default useMe;
