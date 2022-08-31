import Avatar from "components/@common/Avatar";
import Button from "components/@common/Button";
import Heart from "components/@common/Heart";
import Stack from "components/@common/Stack";
import Tag from "components/@common/Tag";
import Text from "components/@common/Text";

import { GetChallenge } from "lib/apis/challenge/types";
import * as Styled from "./ChallengeCardStyled";

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
  return (
    <Styled.LinkWrapper to={`/challenge/${challengeId}`}>
      <Styled.DateAndHeart>
        <Styled.Date>{createdDate}</Styled.Date>
        <Heart isFill={cart} />
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
      <Stack>
        <Styled.Participants>
          {profileImgUrls.map((url, index) => (
            <Avatar key={url + "-" + index} url={url} />
          ))}
          <Avatar />
        </Styled.Participants>
        <Button disabled={hasJoined} type="button" mode="join">
          Join
        </Button>
      </Stack>
    </Styled.LinkWrapper>
  );
};

export default ChallengeCard;
