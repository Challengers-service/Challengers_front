import { pallet } from "constants/pallet";
import styled, { css } from "styled-components";
import { Props } from ".";

const selectItemStyle = css<Pick<Props, "isSelect">>`
  ${props =>
    props.isSelect &&
    css`
      color: ${pallet.mainColor};
    `}
`;

export const Wrapper = styled.li<Pick<Props, "isSelect">>`
  padding: 15px 0;
  color: ${pallet.baseColor.subText};
  cursor: pointer;
  &:hover {
    color: ${pallet.mainColor};
  }

  ${selectItemStyle}
`;
