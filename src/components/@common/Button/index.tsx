import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./ButtonStyled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "large" | "medium" | "small";
  children?: ReactNode;
  fullWidth?: boolean;
  mode?: "default" | "social";
}

export default function Button({
  onClick,
  size,
  fullWidth = false,
  children,
  mode = "default",
}: ButtonProps) {
  return (
    <StyledButton
      mode={mode}
      fullWidth={fullWidth}
      size={size}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
