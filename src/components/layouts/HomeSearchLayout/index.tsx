import Select from "components/@common/Select";
import { ArrowIcon } from "components/@common/vectors";
import { useInternalRouter } from "hooks/useInternalRouter";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { searchChallengeLengthAtom } from "stores/home";
import HomeLayout from "../HomeLayout";
import * as Styled from "./HomeSearchLayoutStyled";

const HomeSearchLayout = () => {
  const router = useInternalRouter();
  const challengeLength = useRecoilValue(searchChallengeLengthAtom);
  const [searchParams] = useSearchParams();
  const [select, setSelect] = useState("인기순");
  const [isSelect, setIsSelect] = useState(false);

  const challengeName = searchParams.get("name")?.toString();

  const onChange = (value: string) => {
    setSelect(value);
    setIsSelect(true);
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
    <HomeLayout>
      <Styled.SearchBox>
        <Styled.Search>
          <strong>#{challengeName}</strong> 검색결과 {challengeLength || "..."}
          개
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
      <Outlet
        context={{
          challengeName,
        }}
      />
    </HomeLayout>
  );
};
export default HomeSearchLayout;
