import { useMemo } from "react";
import useMe from "./queries/auth/useMe";

function useAuth() {
  const me = useMe();
  const isLogin = useMemo(() => (me.data ? true : false), [me]);

  return {
    me: me.data,
    isLogin,
  };
}

export default useAuth;
