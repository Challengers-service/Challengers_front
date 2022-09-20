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

const MenuTypeStyles = css<{ type: string }>`
  ${props =>
    props.type === "default" &&
    css`
      position: absolute;
      top: 61px;
      left: 0;
      width: 100%;
      height: fit-content;
      max-height: 403px;
      background: #fff;
      border: 1px solid #e1e1e1;
      border-radius: 25px;
      padding: 30px;
      padding-right: 0;
      z-index: 1000;
    `}
  ${props =>
    props.type === "home" &&
    css`
      position: absolute;
      top: 30px;
      left: 0;
      width: 100%;
      height: fit-content;
      max-height: 403px;
      background: #fff;
      border: 1px solid #e1e1e1;
      border-radius: 25px;
      padding-top: 30px;
      padding-bottom: 30px;
      text-align: center;
      z-index: 1000;
    `}
    ${props =>
    props.type === "radio" &&
    css`
      position: absolute;
      top: 26px;
      left: 0;
      width: 100%;
      height: fit-content;
      /* max-height: 403px; */
      background: #f1f1f1;
      border-radius: 5px;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 16px;
      z-index: 1000;
    `}
`;

export const MenuWrapper = styled.div<{ type: string }>`
  ${MenuTypeStyles}
`;

const ListTypeStyles = css<{ type: string }>`
  ${props =>
    (props.type === "default" || props.type === "home") &&
    css`
      width: 100%;
      height: fit-content;
      max-height: calc(403px - 60px);
      border-radius: 0;
      overflow: auto;
    `}

  ${props =>
    props.type === "button" &&
    css`
      display: flex;
      gap: 15px;
    `}

    ${props =>
    props.type === "radio" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 15px;
    `}
`;

export const Lists = styled.ul<{ type: string }>`
  ${ListTypeStyles}
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

const ItemButtonSelect = css<{ isSelect?: boolean }>`
  ${props =>
    props.isSelect &&
    css`
      color: ${pallet.mainColor};
      border: 1px solid ${pallet.mainColor};
    `}
`;

export const ItemButton = styled.li<{ isSelect?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  padding-left: 2.125rem;
  padding-right: 2.125rem;
  min-width: max-content;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 90px;
  height: 52px;
  font-weight: 400;
  font-size: 15px;
  width: fit-content;
  color: ${pallet.baseColor.subText};
  cursor: pointer;
  ${ItemButtonSelect}
`;

export const RadioItem = styled.div<{ isSelect?: boolean }>`
  position: relative;
  display: flex;
  border-radius: 8px;
  input[type="radio"] {
    position: absolute;
    visibility: hidden;
  }
  label {
    display: block;
    font-size: 14px;
    flex: 1;
    width: 100%;
    padding-top: 1px;
    margin-left: 23px;
    color: #a7adbd;
    cursor: pointer;
    transition: color 0.25s linear;
    -webkit-transition: color 0.25s linear;
  }
  .checkbox_check {
    display: block;
    position: absolute;
    border: 2px solid #bdc2d3;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    z-index: 5;
    transition: border 0.25s linear;
    -webkit-transition: border 0.25s linear;
  }
  .checkbox_check::before {
    display: block;
    position: absolute;
    content: "";
    border-radius: 100%;
    width: 8px;
    height: 8px;
    left: 2px;
    top: 2px;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
  }
  input[type="radio"]:checked ~ .checkbox_check {
    border: 1px solid ${pallet.mainColor};
  }
  input[type="radio"]:checked ~ .checkbox_check::before {
    background: ${pallet.mainColor};
  }
  input[type="radio"]:checked ~ label {
    color: ${pallet.mainColor};
  }
`;

export const Option = styled.div``;
