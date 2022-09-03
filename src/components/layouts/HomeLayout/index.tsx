import Alarm from "components/@common/Alarm";
import Input from "components/@common/Input";
import Stack from "components/@common/Stack";
import Text from "components/@common/Text";
import { SearchIcon } from "components/@common/vectors";
import useInput from "hooks/useInput";
import { useInternalRouter } from "hooks/useInternalRouter";
import React, { PropsWithChildren } from "react";
import SidebarLayout from "../SidebarLayout";
import * as Styled from "./HomeLayout";

interface Props {}

const HomeLayout = ({ children }: PropsWithChildren<Props>) => {
  const router = useInternalRouter();
  const { value, onChange } = useInput();

  const enterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/search", { name: value });
    }
  };
  return (
    <SidebarLayout>
      <Styled.Wrapper>
        <Stack style={{ gap: "30px" }}>
          <Input
            value={value}
            onChange={onChange}
            onKeyUp={enterKey}
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
