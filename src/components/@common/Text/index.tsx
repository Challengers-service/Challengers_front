import { ReactNode } from "react";
import { StyledText } from "./TextStyled";

export type TypographyType = "h1" | "h2" | "h3" | "h4" | "h5" | "subTitle";

export interface TextProps {
  typography?: TypographyType;
  children?: ReactNode;
  color?: string;
}

export default function Text({
  typography = "h4",
  children,
  color,
}: TextProps) {
  return (
    <StyledText typography={typography} color={color}>
      {children}
    </StyledText>
  );
}
