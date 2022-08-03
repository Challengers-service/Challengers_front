import { forwardRef } from "react";
import { Message, StyledInput } from "./InputStyled";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ width = "100%", errorMessage, ...rest }: InputProps, ref) => {
    return (
      <>
        <StyledInput width={width} {...rest} ref={ref} />{" "}
        {errorMessage ? <Message>{errorMessage}</Message> : null}
      </>
    );
  }
);

export default Input;
