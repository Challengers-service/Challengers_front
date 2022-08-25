import * as Styled from "./SideBarStyled";
import { ReactComponent as DashboardIcon } from "assets/vectors/DashboardIcon.svg";
import { ReactComponent as FeedIcon } from "assets/vectors/FeedIcon.svg";
import { ReactComponent as ProfileIcon } from "assets/vectors/ProfileIcon.svg";
import { ReactComponent as AboutUsIcon } from "assets/vectors/AboutUsIcon.svg";
import { ReactComponent as LogOutIcon } from "assets/vectors/LogOutIcon.svg";
import { Link } from "react-router-dom";
import CreateChallengBox from "../CreateChallengBox.tsx";

const SideBar = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>LOGO</Styled.Title>
      <Styled.Menu_ul>
        <Styled.Menu_li className="menu_li">
          <Link to="/">
            <DashboardIcon />
            <span>Dashboard</span>
          </Link>
        </Styled.Menu_li>
        <Styled.Menu_li className="menu_li">
          <Link to="/feed">
            <FeedIcon />
            <span>Feed</span>
          </Link>
        </Styled.Menu_li>
        <Styled.Menu_li className="menu_li">
          <Link to="/profile">
            <ProfileIcon />
            <span>Profile</span>
          </Link>
        </Styled.Menu_li>
        <Styled.Menu_li className="menu_li">
          <Link to="/about">
            <AboutUsIcon />
            <span>About us</span>
          </Link>
        </Styled.Menu_li>
      </Styled.Menu_ul>
      <Styled.CreateChallengBoxWrapper className="createChallengeBox">
        <CreateChallengBox />
      </Styled.CreateChallengBoxWrapper>
      <Styled.LogOutWrapper className="logOutWrapper">
        <Link to="/login">
          <LogOutIcon />
          <span>Sign Out</span>
        </Link>
      </Styled.LogOutWrapper>
    </Styled.Wrapper>
  );
};

export default SideBar;
