import styled, { css } from "styled-components";
import { TextProps, TypographyType } from ".";

const sizeStyles = css<{ typography?: TypographyType }>`
  ${props =>
    props.typography === "h1" &&
    css`
      /*  font-size 30px */
      font-size: 1.875rem;
      font-weight: 700;
    `}

  ${props =>
    props.typography === "h2" &&
    css`
      /*  font-size 20px */
      font-size: 1.25rem;
      font-weight: 700;
    `}

  ${props =>
    props.typography === "h3" &&
    css`
      /*  font-size 18px */
      font-size: 1.125rem;
      font-weight: 700;
    `}
    ${props =>
    props.typography === "h4" &&
    css`
      /*  font-size 16px */
      font-size: 1rem;
      font-weight: 500;
    `}

  ${props =>
    props.typography === "h5" &&
    css`
      /*  font-size 14px */
      font-size: 0.875rem;
      font-weight: 400;
    `}
`;

export const StyledText = styled.span<TextProps>`
  ${sizeStyles}
  ${props => {
    const color = props.color ? props.color : props.theme.textColor;
    return css`
      color: ${color};
    `;
  }}
`;
