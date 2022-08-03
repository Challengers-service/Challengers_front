import { pallet } from "constants/pallet";
import styled, { css } from "styled-components";
import { InputProps } from ".";

export const StyledInput = styled.input<InputProps>`
  /* 공통 스타일 */
  height: 50px;
  font-size: 1rem;
  padding: 20px 30px;
  border: none;
  border-radius: 90px;
  background: ${pallet.gray1};
  &:focus {
    outline: none;
  }
  ${props => {
    return css`
      color: ${props => props.theme.textColor};
      width: ${props.width};
    `;
  }}
`;
