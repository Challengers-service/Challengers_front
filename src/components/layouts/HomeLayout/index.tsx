import Alarm from "components/@common/Alarm";
import Input from "components/@common/Input";
import Stack from "components/@common/Stack";
import Text from "components/@common/Text";
import { SearchIcon } from "components/@common/vectors";
import { PropsWithChildren } from "react";
import SidebarLayout from "../SidebarLayout";
import * as Styled from "./HomeLayout";

interface Props {}

const HomeLayout = ({ children }: PropsWithChildren<Props>) => {
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
        {children}
      </Styled.Wrapper>
    </SidebarLayout>
  );
};

export default HomeLayout;
