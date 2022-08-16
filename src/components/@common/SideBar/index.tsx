import * as Styled from "./SideBarStyled";
import { ReactComponent as DashboardIcon } from "assets/vectors/DashboardIcon.svg";
import { ReactComponent as FeedIcon } from "assets/vectors/FeedIcon.svg";
import { ReactComponent as ProfileIcon } from "assets/vectors/ProfileIcon.svg";
import { ReactComponent as AboutUsIcon } from "assets/vectors/AboutUsIcon.svg";
import { ReactComponent as LogOutIcon } from "assets/vectors/LogOutIcon.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Styled.Wrapper>
      <Styled.Nav className="main.Nav">
        <Styled.Title>LOGO</Styled.Title>
        <Styled.Menu_ul>
          <Styled.Menu_li className="menu_li">
            <Link to="/">
              <DashboardIcon />
              <span>Dashboard</span>
            </Link>
          </Styled.Menu_li>
          <Styled.Menu_li className="menu_li">
            <Link to="/">
              <FeedIcon />
              <span>Feed</span>
            </Link>
          </Styled.Menu_li>
          <Styled.Menu_li className="menu_li">
            <Link to="/">
              <ProfileIcon />
              <span>Profile</span>
            </Link>
          </Styled.Menu_li>
          <Styled.Menu_li className="menu_li">
            <Link to="/">
              <AboutUsIcon />
              <span>About us</span>
            </Link>
          </Styled.Menu_li>
        </Styled.Menu_ul>
      </Styled.Nav>
    </Styled.Wrapper>
  );
};

export default SideBar;
