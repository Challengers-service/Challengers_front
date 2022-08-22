import { pallet } from "constants/pallet";
import styled, { css } from "styled-components";

export const Select = styled.div`
  position: relative;
  width: 100%;
  background: #f9f9f9;
  border: 1px solid #e1e1e1;
  border-radius: 90px;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 30px;
  label {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    font-size: 15px;
    color: ${pallet.baseColor.subText};
  }
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 61px;
  left: 0;
  width: 100%;
  height: fit-content;
  max-height: 403px;
  background: #f9f9f9;
  border: 1px solid #e1e1e1;
  border-radius: 25px;
  padding: 30px;
  padding-right: 0;
  z-index: 1000;
`;

export const Lists = styled.ul`
  width: 100%;
  height: fit-content;
  max-height: calc(403px - 60px);
  border-radius: 0;
  overflow: auto;
`;

const selectItemStyle = css<{ isSelect?: boolean }>`
  ${props =>
    props.isSelect &&
    css`
      color: ${pallet.mainColor};
    `}
`;

export const ItemWrapper = styled.li<{ isSelect?: boolean }>`
  padding: 15px 0;
  color: ${pallet.baseColor.subText};
  cursor: pointer;
  &:hover {
    color: ${pallet.mainColor};
  }

  ${selectItemStyle}
`;

export const Option = styled.div``;
