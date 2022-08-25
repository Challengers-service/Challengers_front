import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  .textMessage {
    display: flex;
    span:first-child {
      display: block;
      padding-top: 3px;
    }
  }
`;

export const CategoryImgBox = styled.img`
  max-width: 403px;
  width: 100%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 30px;
  width: 510px;
  button {
    display: flex;
    justify-content: space-between;
    height: 48px;
    border-radius: 90px;
    font-weight: 500;
    font-size: 16px;
  }
  .mypage_button {
    background: inherit;
    color: ${pallet.mainColor};
    border: 1px solid ${pallet.mainColor};
  }
`;
