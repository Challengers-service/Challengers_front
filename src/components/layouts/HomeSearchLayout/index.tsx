import Select from "components/@common/Select";
import Text from "components/@common/Text";
import { ArrowIcon } from "components/@common/vectors";
import SearchHeader from "components/home/SearchHeader";
import useInput from "hooks/useInput";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useSearchParams } from "react-router-dom";
import SidebarLayout from "../SidebarLayout";
import * as Styled from "./HomeSearchLayoutStyled";

const HomeSearchLayout = () => {
  const [searchParams, setSerachParams] = useSearchParams();
  const challengeName = searchParams.get("name") as string;
  const tabName = changeKoreanTabName(searchParams.get("tab") as string);

  const [challengeLength, setChallengeLength] = useState<number | null>(null);

  const { value: inputValue, onChange } = useInput(challengeName);

  const [isSelect, setIsSelect] = useState(false);
  const [select, setSelect] = useState(tabName);

  const onChangeSelect = (value: string) => {
    setSelect(value);
    setIsSelect(true);
  };

  const enterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSerachParams({ name: inputValue, tab: changeEnglishTabName(select) });
    }
  };

  useEffect(() => {
    if (isSelect) {
      setSerachParams({ name: inputValue, tab: changeEnglishTabName(select) });
      setIsSelect(false);
    }
  }, [select, isSelect, inputValue, challengeName, setSerachParams]);

  function changeKoreanTabName(tab: string) {
    switch (tab) {
      case "popular":
        return "인기순";
      case "new":
        return "최신순";
      default:
        return "인기순";
    }
  }

  function changeEnglishTabName(tab: string) {
    switch (tab) {
      case "인기순":
        return "popular";
      case "최신순":
        return "new";
      default:
        return "popular";
    }
  }

  return (
    <SidebarLayout>
      <Styled.Wrapper>
        <SearchHeader
          className="search_header"
          value={inputValue}
          onChange={onChange}
          onKeyUp={enterKey}
        />
        <Text className="search-layout_title" typography="h1">
          Dashboard
        </Text>
        <Styled.SearchBox>
          <Styled.Search>
            <strong>#{challengeName}</strong>{" "}
            <span>
              검색결과 {challengeLength !== null ? challengeLength : "..."}개
            </span>
          </Styled.Search>
          <Select
            trigger={
              <Styled.Trigger className="trigger">
                <span>{select}</span>
                <ArrowIcon fill="#666666" />
              </Styled.Trigger>
            }
            value={select}
            onChange={onChangeSelect}
            options={["인기순", "최신순"]}
            type="home"
          />
        </Styled.SearchBox>
        <Outlet
          context={{
            challengeName,
            setChallengeLength,
            tab: changeEnglishTabName(select),
          }}
        />
      </Styled.Wrapper>
    </SidebarLayout>
  );
};
export default HomeSearchLayout;
