import styled, { css } from "styled-components";

const UrlStyled = css<{ isUrl: boolean }>`
  ${props =>
    props.isUrl &&
    css`
      background-color: #9090b4;
    `}

  ${props =>
    !props.isUrl &&
    css`
      background: #f2f2f2;
    `}
`;

export const Avatar = styled.div<{ isUrl: boolean }>`
  width: 38px;
  height: 38px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${UrlStyled};
`;
