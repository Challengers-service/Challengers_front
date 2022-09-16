import useMe from "./queries/auth/useMe";

function useAuth() {
  const me = useMe();
  return {
    me: me.data,
    isLogin: me.isSuccess,
  };
}

export default useAuth;
