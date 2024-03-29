import { pallet } from "constants/pallet";
import styled, { css } from "styled-components";
import { TextProps, TypographyType } from ".";

const sizeStyles = css<{ typography?: TypographyType }>`
  ${props =>
    props.typography === "h1" &&
    css`
      font-size: 25px;
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
      font-weight: 400;
    `}

  ${props =>
    props.typography === "h5" &&
    css`
      font-size: 15px;
      font-weight: 400;
    `}

    ${props =>
    props.typography === "subTitle" &&
    css`
      font-size: 14px;
      font-weight: 400;
      color: ${pallet.baseColor.subText};
      line-height: 12px;
    `}
`;

const TextFontSize = css<TextProps>`
  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}
`;

export const StyledText = styled.span<TextProps>`
  white-space: nowrap;
  ${props => {
    const color = props.color ? props.color : props.theme.textColor;
    return css`
      color: ${color};
    `;
  }}
  ${sizeStyles};
  ${TextFontSize};
`;
