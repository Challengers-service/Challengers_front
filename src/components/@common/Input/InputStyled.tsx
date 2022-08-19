import { pallet } from "constants/pallet";
import styled, { css } from "styled-components";
import { InputProps } from ".";

export const Wrapper = styled.div<InputProps>`
  position: relative;
  svg {
    position: absolute;
    top: 21px;
    right: 20px;
    cursor: pointer;
  }
  ${props => {
    return css`
      width: ${props.width};
    `;
  }}
`;

export const StyledInput = styled.input<InputProps>`
  /* 공통 스타일 */
  height: 50px;
  font-size: 15px;
  padding: 20px 30px;
  border: none;
  border-radius: 90px;
  background: ${pallet.gray1};
  &:focus {
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px ${pallet.gray1} inset;
    box-shadow: 0 0 0px 1000px ${pallet.gray1} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  &::placeholder {
    color: ${pallet.baseColor.subText};
    font-weight: 400;
    font-size: 15px;
  }
  &[type="date"] {
    position: relative;
    font-family: inherit;
    &::before {
      position: absolute;
      top: 15px;
      left: 30px;
      content: attr(data-placeholder);
      color: ${pallet.baseColor.subText};
      display: inline-block;
      font-family: inherit;
    }
  }

  &::-webkit-datetime-edit,
  &::-webkit-inner-spin-button,
  &::-webkit-clear-button {
    display: none;
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 15px;
    right: 14px;
    color: black;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
  }

  ${props => {
    const border = props.isBorder && "border: 1px solid #E1E1E1;";
    return css`
      color: ${props => props.theme.textColor};
      width: ${props.width};
      ${border}
    `;
  }}
`;

export const Message = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: red;
`;
