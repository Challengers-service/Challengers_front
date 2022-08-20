import { PropsWithChildren } from "react";
import { StyledText } from "./TextStyled";

export type TypographyType = "h1" | "h2" | "h3" | "h4" | "h5" | "subTitle";

export interface TextProps {
  typography?: TypographyType;
  color?: string;
}

export default function Text({
  typography = "h4",
  children,
  color,
}: PropsWithChildren<TextProps>) {
  return (
    <StyledText typography={typography} color={color}>
      {children}
    </StyledText>
  );
}
