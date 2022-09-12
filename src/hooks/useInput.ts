import { useCallback, useState } from "react";

const useInput = (defaultValue?: string) => {
  const [value, setValue] = useState(defaultValue || "");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, onChange, setValue };
};

export default useInput;
