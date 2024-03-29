import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./ButtonStyled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "large" | "medium" | "small";
  children?: ReactNode;
  fullWidth?: boolean;
  mode?: "default" | "social" | "join";
  className?: string;
}

export default function Button({
  size = "medium",
  fullWidth = false,
  children,
  mode = "default",
  className,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      className={className}
      mode={mode}
      fullWidth={fullWidth}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
