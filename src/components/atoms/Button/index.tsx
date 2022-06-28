import { ReactNode } from "react";
import { StyledButton } from "./ButtonStyled";

export type ButtonType = "button" | "submit";

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size: "large" | "medium" | "small";
  children?: ReactNode;
  fullWidth?: boolean;
  type: ButtonType;
}

export default function Button({
  onClick,
  size,
  fullWidth = false,
  type,
  children,
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      fullWidth={fullWidth}
      size={size}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
