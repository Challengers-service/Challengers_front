import * as Styled from "./HomePageStyled";
import Input from "components/@common/Input";
import SidebarLayout from "components/layouts/SidebarLayout";
import { SearchIcon } from "components/@common/vectors";
import Alarm from "components/@common/Alarm";

const HomePage = () => {
  return (
    <SidebarLayout>
      <Styled.Wrapper>
        <Input
          className="search_input"
          placeholder="Search Challenge"
          isIcon={true}
          icon={<SearchIcon />}
        />
      </Styled.Wrapper>
      <Alarm />
    </SidebarLayout>
  );
};

export default HomePage;
