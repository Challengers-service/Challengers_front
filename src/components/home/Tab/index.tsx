import { useSpring } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import * as Styled from "./TabStyled";

export interface Props {}

const Tab = (props: Props) => {
  const location = useLocation();
  return (
    <Styled.Wrapper>
      <Styled.NavLinks>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? " activated" : "")}
        >
          인기 챌린지
        </NavLink>
        <NavLink
          to="/new"
          className={({ isActive }) => (isActive ? " activated" : "")}
        >
          신규 챌린지
        </NavLink>
        <NavLink
          to="/category"
          className={({ isActive }) => (isActive ? " activated" : "")}
        >
          카테고리별 챌린지
        </NavLink>
        <Styled.Line pathName={location.pathname} />
      </Styled.NavLinks>
    </Styled.Wrapper>
  );
};

export default Tab;
