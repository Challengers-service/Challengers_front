import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const sizeStyles = css<{ size: string }>`
  ${props =>
    props.size === "large" &&
    css`
      height: 3rem;
      font-size: 1.25rem;
      border-radius: 17px;
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

export const StyledButton = styled.button<ButtonProps>`
  /* 공통 스타일 */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  color: white;
  background-color: #af98ea;
  font-weight: bold;
  cursor: pointer;
  padding-left: 2.125rem;
  padding-right: 2.125rem;

  /* 크기 */
  ${sizeStyles}
  ${fullWidthStyle}
`;
