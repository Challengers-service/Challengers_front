import SearchHeader from "components/@common/SearchHeader";
import defaultFeed from "assets/png/defaultFeed.png";
import Text from "components/@common/Text";
import FeedCard from "components/feed/FeedCard";
import FeedSelect from "components/feed/FeedSelect";
import SidebarLayout from "components/layouts/SidebarLayout";
import * as Styled from "./FeedPageStyled";

const FeedPage = () => {
  return (
    <SidebarLayout>
      <Styled.Wrapper>
        <SearchHeader placeholder="Search Challenge" />
        <Styled.Top>
          <Text typography="h1">Feed</Text>
          <FeedSelect />
        </Styled.Top>
        <FeedCard src={defaultFeed} />
      </Styled.Wrapper>
    </SidebarLayout>
  );
};

export default FeedPage;
