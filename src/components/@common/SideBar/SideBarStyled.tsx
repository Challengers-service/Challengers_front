import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  padding: 10px 0;
  width: 85px;
  top: 0;
  left: 20px;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  z-index: 1000;
  height: 100%;
  max-height: fit-content;
  &:hover {
    width: 240px;
    overflow: scroll;
    .menu_li {
      span {
        visibility: visible;
      }
    }
    .createChallengeBox {
      display: block;
    }
    .logOutWrapper {
      padding: 0 74px;
      span {
        visibility: visible;
      }
    }
  }
`;

export const Nav = styled.nav`
  background-color: #ffffff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  height: 100%;
  overflow: scroll;

  box-shadow: 0px 0px 20px rgba(29, 54, 152, 0.04);
  border-radius: 40px;

  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  z-index: 1000;

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
  padding-top: 49px;
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
  display: none;
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
