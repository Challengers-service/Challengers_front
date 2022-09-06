import Select from "components/@common/Select";
import Text from "components/@common/Text";
import { ArrowIcon } from "components/@common/vectors";
import SearchHeader from "components/home/SearchHeader";
import useInput from "hooks/useInput";
import { useInternalRouter } from "hooks/useInternalRouter";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useSearchParams } from "react-router-dom";
import SidebarLayout from "../SidebarLayout";
import * as Styled from "./HomeSearchLayoutStyled";

const HomeSearchLayout = () => {
  const router = useInternalRouter();

  const [search, setSerach] = useSearchParams();
  const challengeName = search.get("name") as string;

  const [challengeLength, setChallengeLength] = useState<number | null>(null);

  const { value, onChange } = useInput(challengeName);

  const [isSelect, setIsSelect] = useState(false);
  const [select, setSelect] = useState("인기순");

  const onChangeSelect = (value: string) => {
    setSelect(value);
    setIsSelect(true);
  };

  const enterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSerach({ name: value });
    }
  };
  useEffect(() => {
    if (isSelect) {
      if (select === "인기순") {
        router.push("/search", { name: challengeName as string });
      }
      if (select === "최신순") {
        router.push("/search/new", { name: challengeName as string });
      }
    }
  }, [select, isSelect, router, challengeName]);

  return (
    <SidebarLayout>
      <Styled.Wrapper>
        <SearchHeader
          className="search_header"
          value={value}
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
          }}
        />
      </Styled.Wrapper>
    </SidebarLayout>
  );
};
export default HomeSearchLayout;
