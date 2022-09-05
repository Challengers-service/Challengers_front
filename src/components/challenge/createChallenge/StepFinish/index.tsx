import Button from "components/@common/Button";
import { categoryDetail } from "constants/category";
import { useRecoilValue } from "recoil";
import { selectCategoryAtom } from "stores/challenge";
import * as Styled from "./StepFinishStyled";
import NextArrow from "components/@common/NextArrow";
import Text from "components/@common/Text";
import { pallet } from "constants/pallet";
import useResetCreateChallenge from "../../hooks/useResetCreateChallenge";
import { useInternalRouter } from "hooks/useInternalRouter";

const StepFinish = () => {
  const category = useRecoilValue(selectCategoryAtom);
  const router = useInternalRouter();
  const { reset } = useResetCreateChallenge();

  const onClickMyPageBtn = () => {
    reset();
  };

  const onClickChallengeHomeBtn = () => {
    reset();
    router.push("/");
  };

  return (
    <Styled.Wrapper>
      <Styled.CategoryImgBox
        src={categoryDetail[category].imgUrl}
        alt={categoryDetail[category].koreaTitle}
      />
      <Text className="textMessage" color={pallet.secondary.red}>
        <span>*</span>
        <span>챌린지 카테고리에 따른 일러스트가 노출됩니다.</span>
      </Text>
      <Styled.ButtonGroup>
        <Button
          onClick={onClickMyPageBtn}
          type="button"
          className="mypage_button"
          size="small"
          fullWidth
        >
          <span>마이페이지 바로가기</span>
          <NextArrow />
        </Button>
        <Button
          onClick={onClickChallengeHomeBtn}
          type="button"
          size="small"
          fullWidth
        >
          <span>챌린지 홈 바로가기</span>
          <NextArrow fill="white" />
        </Button>
      </Styled.ButtonGroup>
    </Styled.Wrapper>
  );
};

export default StepFinish;
