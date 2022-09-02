import * as Styled from "./HomePageStyled";
import Input from "components/@common/Input";
import SidebarLayout from "components/layouts/SidebarLayout";
import { SearchIcon } from "components/@common/vectors";
import Alarm from "components/@common/Alarm";
import ChallengeCardList from "components/challenge/ChallengeCardList";
import Stack from "components/@common/Stack";
import Text from "components/@common/Text";
import useChallengeLoad from "hooks/queries/challenge/useChallengeLoad";

const HomePage = () => {
  const { data, viewElement } = useChallengeLoad("popular");
  return (
    <SidebarLayout>
      <Styled.Wrapper>
        <Stack>
          <Input
            className="search_input"
            placeholder="Search Challenge"
            isIcon={true}
            icon={<SearchIcon />}
          />
          <Alarm />
        </Stack>
        <Text typography="h1">Dashboard</Text>
        <ChallengeCardList challengeResults={data?.pages} />
        {viewElement}
      </Styled.Wrapper>
    </SidebarLayout>
  );
};

export default HomePage;
