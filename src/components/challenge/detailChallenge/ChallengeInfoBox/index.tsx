import { HeartFillIcon, HeartNotFillIcon } from "components/@common/vectors";
import useLikeManager from "hooks/useLikeManager";
import useChallengeDetail from "hooks/queries/challenge/useChallengeDetail";
import useAuth from "hooks/useAuth";
import { useOpenLoginDialog } from "hooks/useOpenLoginDialog";
import * as Styled from "./ChallengeInfoBoxStyled";

export interface Props {
  challengeId: number;
}

const ChallengeInfoBox = ({ challengeId }: Props) => {
  const { isLogin } = useAuth();
  const openLoginDialog = useOpenLoginDialog();
  const { data: challenge } = useChallengeDetail(challengeId);
  const { like, unLike } = useLikeManager(challengeId);

  const onClickNotFillHeart = () => {
    if (!isLogin) openLoginDialog();
    else like();
  };

  const onClickFillHeart = () => {
    if (!isLogin) openLoginDialog();
    else unLike();
  };

  if (!challenge) return null;

  const {
    cart,
    startDate,
    endDate,
    checkFrequencyType,
    checkTimesPerRound,
    userCount,
    userCountLimit,
    expectedReward,
  } = challenge;

  const getTimesPerRound = () => {
    switch (checkFrequencyType) {
      case "EVERY_DAY":
        return (
          <Styled.Info>
            <strong>매일</strong>
          </Styled.Info>
        );
      case "EVERY_WEEK":
        return (
          <Styled.Info>
            <strong>매주</strong>
          </Styled.Info>
        );
      case "OTHERS":
        return (
          <Styled.Info>
            <strong>7</strong> 일 <strong>{checkTimesPerRound}</strong> 회
          </Styled.Info>
        );
    }
  };

  return (
    <Styled.Wrapper>
      {cart ? (
        <HeartFillIcon onClick={onClickFillHeart} className="heart" />
      ) : (
        <HeartNotFillIcon onClick={onClickNotFillHeart} className="heart" />
      )}
      <Styled.Stack>
        <Styled.SubText>📅 챌린지 기간</Styled.SubText>
        <Styled.Info>
          <strong>{startDate}</strong> 부터 <strong>{endDate}</strong>
          까지
        </Styled.Info>
      </Styled.Stack>
      <Styled.Stack>
        <Styled.SubText>📷 인증 빈도</Styled.SubText>
        {getTimesPerRound()}
      </Styled.Stack>
      <Styled.Stack>
        <Styled.SubText>🙋🏻 현재 참여 인원</Styled.SubText>
        <Styled.Info>
          <strong>{userCount}</strong> 명 / {userCountLimit} 명
        </Styled.Info>
      </Styled.Stack>
      <Styled.Stack>
        <Styled.SubText>💰 리워드 포인트</Styled.SubText>
        <Styled.Info>
          <strong>{expectedReward}</strong> P
        </Styled.Info>
      </Styled.Stack>
    </Styled.Wrapper>
  );
};

export default ChallengeInfoBox;
