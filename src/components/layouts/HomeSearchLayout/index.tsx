import DefaultTrigger from "components/@common/DefaultTrigger";
import Select from "components/@common/Select";
import { ArrowIcon } from "components/@common/vectors";
import { useState } from "react";
import { Outlet } from "react-router";
import HomeLayout from "../HomeLayout";
import * as Styled from "./HomeSearchLayoutStyled";

const HomeSearchLayout = () => {
  const [select, setSelect] = useState("인기순");
  const onChange = (value: string) => {
    setSelect(value);
  };
  return (
    <HomeLayout>
      <Styled.SearchBox>
        <Styled.Search>
          <strong>#개발</strong> 검색결과 24개
        </Styled.Search>
        <Select
          trigger={
            <Styled.Trigger className="trigger">
              <span>{select}</span>
              <ArrowIcon fill="#666666" />
            </Styled.Trigger>
          }
          value={select}
          onChange={onChange}
          options={["인기순", "최신순"]}
          type="home"
        />
      </Styled.SearchBox>
      <Outlet />
    </HomeLayout>
  );
};
export default HomeSearchLayout;
