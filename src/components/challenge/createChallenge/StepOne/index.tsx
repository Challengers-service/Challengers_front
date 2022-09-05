import Button from "components/@common/Button";
import { categories, categoryDetail } from "constants/category";
import { useRecoilState, useSetRecoilState } from "recoil";
import { challengeStepAtom, selectCategoryAtom } from "stores/challenge";
import { useInternalRouter } from "hooks/useInternalRouter";
import CategoryCard from "../CategoryCard";
import * as Styled from "./StepOneStyled";
import { CategoryType } from "lib/apis/challenge/types";

const StepOne = () => {
  const router = useInternalRouter();

  const [selectCategory, setSelectCategory] =
    useRecoilState(selectCategoryAtom);

  const setChallengeStep = useSetRecoilState(challengeStepAtom);

  const onClickCategory = (category: CategoryType) => {
    setSelectCategory(category);
  };

  const onClickNextButton = () => {
    setChallengeStep(2);
    router.push("/create-challenge/two");
  };
  return (
    <Styled.Wrapper>
      <Styled.CateogryGroup>
        {categories.map((category, index) => (
          <Styled.CategoryCardWrapper
            key={index}
            onClick={() => onClickCategory(category)}
          >
            <CategoryCard
              isSelect={selectCategory === category}
              {...categoryDetail[category]}
            />
          </Styled.CategoryCardWrapper>
        ))}
      </Styled.CateogryGroup>
      <Button
        style={{
          alignSelf: "flex-end",
          width: "130px",
        }}
        size="medium"
        onClick={onClickNextButton}
      >
        다음
      </Button>
    </Styled.Wrapper>
  );
};

export default StepOne;
