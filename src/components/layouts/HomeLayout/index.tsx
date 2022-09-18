import Text from "components/@common/Text";
import SearchHeader from "components/@common/SearchHeader";
import useInput from "hooks/useInput";
import { useInternalRouter } from "hooks/useInternalRouter";
import React, { PropsWithChildren } from "react";
import SidebarLayout from "../SidebarLayout";
import * as Styled from "./HomeLayout";

interface Props {}

const HomeLayout = ({ children }: PropsWithChildren<Props>) => {
  const router = useInternalRouter();
  const { value, onChange } = useInput("");
  const enterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/search", { name: value, tab: "popular" });
    }
  };
  return (
    <SidebarLayout>
      <Styled.Wrapper>
        <SearchHeader
          className="search_header"
          value={value}
          onChange={onChange}
          onKeyUp={enterKey}
        />
        <Text typography="h1">Dashboard</Text>
        {children}
      </Styled.Wrapper>
    </SidebarLayout>
  );
};

export default HomeLayout;
