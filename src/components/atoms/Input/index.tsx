import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./InputStyled";

export type InputType =
  | "email"
  | "password"
  | "text"
  | "date"
  | "datetime-local";

export interface InputProps {
  width?: string;
  register: UseFormRegisterReturn;
  mb?: string;
  placeholder?: string;
  type?: InputType;
}

export default function Input({
  width = "100%",
  mb = "0px",
  ...rest
}: InputProps) {
  return <StyledInput width={width} mb={mb} {...rest} {...rest.register} />;
}
