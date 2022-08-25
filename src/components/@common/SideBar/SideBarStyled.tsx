import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Wrapper = styled.nav`
  background-color: #ffffff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;

  box-shadow: 0px 0px 20px rgba(29, 54, 152, 0.04);
  position: absolute;
  top: 0;
  bottom: 0;
  min-height: 100%;
  height: fit-content;
  left: 0;
  width: 85px;
  border-radius: 40px;
  overflow: hidden;

  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  z-index: 1000;

  &:hover {
    width: 240px;
    overflow: visible;
    .menu_li {
      span {
        visibility: visible;
      }
    }
    .createChallengeBox {
      visibility: visible;
    }
    .logOutWrapper {
      padding: 0 74px;
      span {
        visibility: visible;
      }
    }
  }

  display: flex;
  flex-direction: column;

  padding: 43px 0 40px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  padding: 0 84px;
  color: #000;
`;

export const Menu_ul = styled.ul`
  padding-top: 53px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  flex: 1;
`;

export const Menu_li = styled.li`
  height: 53px;
  border-radius: 13px;
  padding: 17px 14px;
  &:hover {
    background-color: #f3f5fa;
    cursor: pointer;
    a {
      span {
        font-weight: 700;
        color: #6563ff;
      }
    }
  }
  a {
    display: block;
    width: 120px;
    display: grid;
    grid-template-columns: 25px 1fr;
    align-items: center;
    gap: 15px;
    span {
      transition: all 0.2s ease-in;
      color: ${pallet.baseColor.subText};
      visibility: hidden;
    }
  }
`;

export const CreateChallengBoxWrapper = styled.div`
  transition: all 0.2s ease-in;
  visibility: hidden;
  padding: 217px 15px 28px;
`;

export const LogOutWrapper = styled.div`
  transition: all 0.2s ease-in;
  padding: 0 34px;
  width: 100%;
  a {
    width: 120px;
    display: flex;
    align-items: center;
    gap: 15px;
    span {
      transition: all 0.2s ease-in;
      color: #a2a1ff;
      visibility: hidden;
    }
  }
`;
