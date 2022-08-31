import * as Styled from "./HomePageStyled";
import Input from "components/@common/Input";
import SidebarLayout from "components/layouts/SidebarLayout";
import { SearchIcon } from "components/@common/vectors";
import Alarm from "components/@common/Alarm";
import { useEffect } from "react";
import { getChallenge } from "lib/apis/challenge";
import { mock_getChallenges } from "mock/challenge";
import ChallengeCardList from "components/challenge/ChallengeCardList";
import Stack from "components/@common/Stack";
import Text from "components/@common/Text";

const HomePage = () => {
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
        <ChallengeCardList challenges={mock_getChallenges} />
      </Styled.Wrapper>
    </SidebarLayout>
  );
};

export default HomePage;
