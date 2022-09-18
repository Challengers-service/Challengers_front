import { pallet } from "constants/pallet";
import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const sizeStyles = css<{ size?: "large" | "medium" | "small" }>`
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
      height: 48px;
      font-size: 1rem;
      border-radius: 10px;
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

const modeStyles = css<{ mode?: "default" | "social" | "join" }>`
  ${props =>
    props.mode === "default" &&
    css`
      background-color: ${pallet.mainColor};
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

  ${props =>
    props.mode === "join" &&
    css`
      width: 100px;
      background: #333333;
      height: 38px;
      color: white;
      font-size: 16px;
      font-weight: 500;
      border: none;
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
  min-width: max-content;
  /* 크기 */
  ${sizeStyles}
  ${fullWidthStyle}
  /* default | social | "join" */
  ${modeStyles}

  ${props =>
    props.disabled === true &&
    css`
      background: #d7d7d7;
      /* border-radius: 10px; */
    `}
`;
