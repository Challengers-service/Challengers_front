import { pallet } from "constants/pallet";
import styled, { css } from "styled-components";
import { InputProps } from ".";

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
  &::placeholder {
    color: ${pallet.gray0};
    font-weight: 400;
    font-size: 15px;
  }
  ${props => {
    return css`
      color: ${props => props.theme.textColor};
      width: ${props.width};
    `;
  }}
`;

export const Message = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: red;
`;
