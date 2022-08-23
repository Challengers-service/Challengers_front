import { pallet } from "constants/pallet";
import styled, { css } from "styled-components";

export const Wrapper = styled.form`
  padding-top: 80px;
  padding-bottom: 62px;
  padding-right: 171px;
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

export const FileButtonWrapper = styled.div`
  .file_button {
    border-radius: 100px;
    width: 120px;
    height: 52px;
  }
  display: flex;
  gap: 16px;
`;

export const SelectFiles = styled.ul`
  margin-top: calc(52px / 2 - 10px);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SelectFile = styled.li`
  color: ${pallet.baseColor.subText};
  line-height: 25px;
`;

export const DefaultImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: ${pallet.baseColor.subText};
  letter-spacing: -0.005em;
  strong {
    color: ${pallet.mainColor};
  }
`;

export const DefaultImage = styled.img`
  width: 100%;
  max-width: 527px;
`;
