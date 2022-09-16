import Avatar from "components/@common/Avatar";
import Button from "components/@common/Button";
import Heart from "components/@common/Heart";
import Stack from "components/@common/Stack";
import Tag from "components/@common/Tag";
import Text from "components/@common/Text";
import { GetChallenge } from "lib/apis/challenge/types";
import * as Styled from "./ChallengeCardStyled";
import { getEnglishDate } from "lib/utils/getEnglishDate";
import useAuth from "hooks/useAuth";
import { useOpenLoginDialog } from "hooks/useOpenLoginDialog";
import useLikeManager from "hooks/useLikeManager";
import React from "react";
import { useNavigate } from "react-router";
import useChallengeJoin from "hooks/queries/challenge/useChallengeJoin";

export interface Props {
  challenge: GetChallenge;
}

const ChallengeCard = ({ challenge }: Props) => {
  const {
    challengeId,
    name,
    category,
    tags,
    createdDate,
    profileImgUrls,
    hasJoined,
    cart,
  } = challenge;
  const navigate = useNavigate();
  const { isLogin } = useAuth();
  const openLoginDialog = useOpenLoginDialog();
  const joinChallengeMutation = useChallengeJoin(challengeId);
  const { like, unLike } = useLikeManager(challengeId);

  const onClickHeart = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    if (!isLogin) openLoginDialog();
    else {
      if (cart) unLike();
      else like();
    }
  };

  const onClickWrapper = () => {
    navigate(`/challenge/${challengeId}`);
  };

  const onClickJoinBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!isLogin) openLoginDialog();
    else {
      if (hasJoined) return;
      joinChallengeMutation.mutate(Number(challengeId));
    }
  };

  return (
    <Styled.LinkWrapper onClick={onClickWrapper}>
      <Styled.DateAndHeart>
        <Styled.Date>{getEnglishDate(createdDate)}</Styled.Date>
        <Heart onClick={onClickHeart} isFill={cart} />
      </Styled.DateAndHeart>
      <Stack
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "22px",
        }}
      >
        <Text color="#333333" typography="h1">
          {name}
        </Text>
        <Styled.Category>{category}</Styled.Category>
      </Stack>
      <Styled.Tags>
        {tags.map(name => (
          <Tag key={name + "-" + challengeId} name={name} />
        ))}
      </Styled.Tags>
      <Stack style={{ alignItems: "center" }}>
        <Styled.Participants>
          {profileImgUrls.map((url, index) => (
            <Avatar key={url + "-" + index} url={url} />
          ))}
          <Avatar />
        </Styled.Participants>
        <Button
          onClick={onClickJoinBtn}
          disabled={hasJoined}
          type="button"
          mode="join"
        >
          Join
        </Button>
      </Stack>
    </Styled.LinkWrapper>
  );
};

export default ChallengeCard;
