import styled, { css } from "styled-components";
import { LabelProps } from "./";

export const StyledLabel = styled.label<LabelProps>`
  display: block;
  font-size: 0.9rem;
  font-weight: 400;
  ${props => {
    return css`
      color: ${props => props.theme.textColor};
      margin-bottom: ${props.mb};
    `;
  }};
`;
