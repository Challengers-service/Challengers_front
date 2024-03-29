import { pallet } from "constants/pallet";
import styled from "styled-components";
import { Props } from ".";

export const TextareaStyled = styled.textarea<Props>`
  width: 100%;
  resize: none;
  font-size: 0.9rem;
  border: none;
  background: #f9f9f9;
  border: 1px solid #e1e1e1;
  border-radius: 15px;
  background: #f9f9f9;
  padding: 30px;
  word-wrap: break-word;
  font-family: inherit;
  height: 250px;
  &:focus {
    border: 1px solid #e1e1e1;
    outline: none;
  }
  &::placeholder {
    line-height: 24px;
    font-weight: 400;
    font-size: 15px;
    color: ${pallet.baseColor.subText};
    font-family: inherit;
    letter-spacing: -0.005em;
  }
`;
