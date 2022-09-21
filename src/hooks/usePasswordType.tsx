import { PasswordNotSee, PasswordSee } from "components/@common/vectors";
import { useCallback, useRef, useState } from "react";

const usePasswordType = () => {
  const [passwordType, setPasswordType] =
    useState<"password" | "text">("password");
  const isPasswordType = useRef(passwordType === "password");
  const changeType = useCallback(() => {
    setPasswordType(prev => {
      if (prev === "password") {
        isPasswordType.current = false;
        return "text";
      } else {
        isPasswordType.current = true;
        return "password";
      }
    });
  }, []);

  const getPasswordIcon = () => {
    return isPasswordType.current ? (
      <PasswordSee onClick={changeType} />
    ) : (
      <PasswordNotSee onClick={changeType} />
    );
  };

  return {
    passwordType,
    changeType,
    isPasswordType: isPasswordType.current,
    icon: getPasswordIcon(),
  };
};

export default usePasswordType;
