import { useEffect, useRef } from "react";

function useMounted() {
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    }
  }, []);
  return mounted;
}

export default useMounted;
