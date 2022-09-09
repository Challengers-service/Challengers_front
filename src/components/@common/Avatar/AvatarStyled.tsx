import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div<{ isUrl: boolean; bgColor: string }>`
  width: 38px;
  height: 38px;
  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
  border: 1px solid #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => {
    return css`
      background: ${props.bgColor};
    `;
  }}
`;

export const Name = styled.span`
  margin-left: 11px;
  font-weight: 500;
  font-size: 15px;
  color: #333333;
`;
