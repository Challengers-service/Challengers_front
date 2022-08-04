import { pallet } from "constants/pallet";
import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const sizeStyles = css<{ size: string }>`
  ${props =>
    props.size === "large" &&
    css`
      height: 58px;
      font-size: 17px;
      font-weight: 500;
      border-radius: 90px;
    `}

  ${props =>
    props.size === "medium" &&
    css`
      height: 2.375rem;
      font-size: 1rem;
      border-radius: 13px;
    `}

  ${props =>
    props.size === "small" &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
      border-radius: 8px;
    `}
`;

const fullWidthStyle = css<{ fullWidth?: boolean }>`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const modeStyles = css<{ mode?: "default" | "social" }>`
  ${props =>
    props.mode === "default" &&
    css`
      background-color: ${pallet.purple0};
      border: none;
      color: white;
    `}

  ${props =>
    props.mode === "social" &&
    css`
      background: #ffffff;
      border: 1px solid #333333;
      color: #333333;
    `}
`;

export const StyledButton = styled.button<ButtonProps>`
  /* 공통 스타일 */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  padding-left: 2.125rem;
  padding-right: 2.125rem;
  /* 크기 */
  ${sizeStyles}
  ${fullWidthStyle}
  /* default | social */
  ${modeStyles}
`;