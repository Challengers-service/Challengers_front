import styled, { css } from "styled-components";
import { AvatarMode } from ".";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarModeStyle = css<{ mode: AvatarMode }>`
  ${props =>
    props.mode === "default" &&
    css`
      width: 38px;
      height: 38px;
      img {
        width: 38px;
        height: 38px;
        border-radius: 50%;
      }
      border: 1px solid #ffffff;
    `}

  ${props =>
    props.mode === "header" &&
    css`
      width: 52px;
      height: 52px;
      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
    `}
`;

export const Avatar = styled.div<{
  isUrl: boolean;
  bgColor: string;
  mode: AvatarMode;
}>`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${AvatarModeStyle};
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
