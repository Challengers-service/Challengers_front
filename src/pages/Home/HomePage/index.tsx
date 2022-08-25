import * as Styled from "./HomePageStyled";
import Input from "components/@common/Input";
import SidebarLayout from "components/layouts/SidebarLayout";
import { SearchIcon } from "components/@common/vectors";

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
    </SidebarLayout>
  );
};

export default HomePage;
