import { pallet } from "constants/pallet";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Nav = styled.nav`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;

  background: blue;
  box-shadow: 0px 0px 20px rgba(29, 54, 152, 0.04);
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  left: 0;
  width: 85px;
  border-radius: 40px;
  overflow: hidden;

  -webkit-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
  z-index: 1000;

  &:hover {
    width: 240px;
    overflow: visible;
    .menu_li {
      a {
        gap: 15px;
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
  height: 248px;
  display: flex;
  flex-direction: column;
  gap: 51px;
`;

export const Menu_li = styled.li`
  padding-left: 30px;
  a {
    width: 120px;
    display: flex;
    align-items: center;
    gap: 30px;
    span {
      color: ${pallet.baseColor.subText};
    }
  }
`;
