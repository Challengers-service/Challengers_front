import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./InputStyled";

export type InputType =
  | "email"
  | "password"
  | "text"
  | "date"
  | "datetime-local";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ width = "100%", ...rest }: InputProps, ref) => {
    return <StyledInput width={width} {...rest} ref={ref} />;
  }
);

export default Input;
