import { pallet } from "constants/pallet";
import styled, { css } from "styled-components";

export const Wrapper = styled.form`
  .depositPoint_button {
    width: 120px;
    height: 52px;
    border-radius: 100px;
    font-size: 15px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  button {
    background: #ffffff;
    border: 1px solid #e1e1e1;
    border-radius: 90px;
    height: 52px;
    font-weight: 400;
    font-size: 15px;
    color: ${pallet.baseColor.subText};
    &:focus {
      color: ${pallet.mainColor};
      border: 1px solid ${pallet.mainColor};
    }
  }
`;

export const ButtonAndSelect = styled.div`
  display: flex;
  gap: 40px;
`;

export const SelectWrapper = styled.div<{ isOpen?: boolean }>`
  display: none;
  margin-left: 40px;
  ${props =>
    props.isOpen &&
    css`
      display: block;
    `}
  .trigger {
    width: 100px;
  }
  .first_child {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }
  strong {
    color: ${pallet.mainColor};
  }
`;
