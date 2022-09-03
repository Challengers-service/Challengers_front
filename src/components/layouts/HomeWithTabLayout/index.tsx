import * as Styled from "./HomeWithTabLayoutStyled";
import Input from "components/@common/Input";
import SidebarLayout from "components/layouts/SidebarLayout";
import { SearchIcon } from "components/@common/vectors";
import Alarm from "components/@common/Alarm";
import Stack from "components/@common/Stack";
import Text from "components/@common/Text";
import Tab from "components/home/Tab";
import { Outlet } from "react-router";

const HomeWithTabLayout = () => {
  return (
    <SidebarLayout>
      <Styled.Wrapper>
        <Stack style={{ gap: "30px" }}>
          <Input
            className="search_input"
            placeholder="Search Challenge"
            isIcon={true}
            icon={<SearchIcon />}
          />
          <Alarm />
        </Stack>
        <Text typography="h1">Dashboard</Text>
        <Tab />
        <Outlet />
      </Styled.Wrapper>
    </SidebarLayout>
  );
};

export default HomeWithTabLayout;
