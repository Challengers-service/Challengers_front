import { PropsWithChildren } from "react";
import { StyledText } from "./TextStyled";

export type TypographyType = "h1" | "h2" | "h3" | "h4" | "h5" | "subTitle";

export interface TextProps {
  typography?: TypographyType;
  color?: string;
  fontSize?: string;
}

export default function Text({
  typography = "h4",
  children,
  color,
  fontSize,
}: PropsWithChildren<TextProps>) {
  return (
    <StyledText fontSize={fontSize} typography={typography} color={color}>
      {children}
    </StyledText>
  );
}
