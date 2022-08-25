import { PropsWithChildren } from "react";
import { StyledText } from "./TextStyled";

export type TypographyType = "h1" | "h2" | "h3" | "h4" | "h5" | "subTitle";

export interface TextProps {
  typography?: TypographyType;
  color?: string;
  fontSize?: string;
  className?: string;
}

export default function Text({
  typography = "h4",
  children,
  color,
  fontSize,
  className,
}: PropsWithChildren<TextProps>) {
  return (
    <StyledText
      className={className}
      fontSize={fontSize}
      typography={typography}
      color={color}
    >
      {children}
    </StyledText>
  );
}
