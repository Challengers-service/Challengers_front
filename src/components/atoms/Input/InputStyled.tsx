import styled, { css } from "styled-components";
import { InputProps } from ".";

export const StyledInput = styled.input<InputProps>`
  /* 공통 스타일 */
  height: 50px;
  font-size: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid #000000;
  border-radius: 40px;
  &:focus {
    outline: none;
  }
  ${props => {
    return css`
      color: ${props => props.theme.textColor};
      width: ${props.width};
      margin-bottom: ${props.mb};
    `;
  }}
`;
