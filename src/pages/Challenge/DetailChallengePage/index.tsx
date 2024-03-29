import * as Styled from "./DetailChallengePageStyled";
import ChallengeDescription from "components/challenge/detailChallenge/ChallengeDescription";
import ChallengeInfoBox from "components/challenge/detailChallenge/ChallengeInfoBox";
import DetailHeader from "components/challenge/detailChallenge/DetailHeader";
import SidebarLayout from "components/layouts/SidebarLayout";
import useChallengeDetail from "hooks/queries/challenge/useChallengeDetail";
import { useParams } from "react-router";
import Label from "components/@common/Label";
import Button from "components/@common/Button";
import useChallengeJoin from "hooks/queries/challenge/useChallengeJoin";
import useAuth from "hooks/useAuth";
import { useOpenLoginDialog } from "hooks/useOpenLoginDialog";

const DetailChallengePage = () => {
  const { challengeId } = useParams<{ challengeId: string }>();
  const { isLogin } = useAuth();
  const openLoginModal = useOpenLoginDialog();

  const { data: challenge } = useChallengeDetail(Number(challengeId));
  const joinChallengeMutation = useChallengeJoin(Number(challengeId));

  if (!challenge) return <div>로딩중..</div>;

  const { challengeRule, examplePhotos, hasJoined } = challenge;

  const onClickJoinBtn = () => {
    if (!isLogin) openLoginModal();
    else {
      if (hasJoined) return;
      joinChallengeMutation.mutate(Number(challengeId));
    }
  };

  return (
    <SidebarLayout>
      <Styled.Wrapper>
        <DetailHeader />
        <Styled.Main>
          <Styled.FlexBox>
            <ChallengeDescription challengeId={Number(challengeId)} />
            <ChallengeInfoBox challengeId={Number(challengeId)} />
          </Styled.FlexBox>
          <Styled.Line />
          <Styled.Rule>
            <Label labelText="도전 규칙" />
            <p>{challengeRule}</p>
          </Styled.Rule>
          <Styled.PhotoBox>
            <Label labelText="인증 사진 예시" />
            <Styled.ImageGroup>
              {examplePhotos.map((photo, index) => (
                <Styled.Image key={index} src={photo} alt={"인증사진"} />
              ))}
            </Styled.ImageGroup>
          </Styled.PhotoBox>
          <Button
            onClick={onClickJoinBtn}
            disabled={hasJoined}
            className="join_button"
          >
            참여하기
          </Button>
        </Styled.Main>
      </Styled.Wrapper>
    </SidebarLayout>
  );
};

export default DetailChallengePage;
