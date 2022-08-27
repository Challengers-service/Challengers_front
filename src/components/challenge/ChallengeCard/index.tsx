import { GetChallenge } from "lib/apis/challenge/types";
import * as Styled from "./ChallengeCardStyled";

export interface Props {
  challenge: GetChallenge;
}

const ChallengeCard = ({ challenge }: Props) => {
  const { name, category, tags, createdDate, profileImgUrls, hasJoined } =
    challenge;
  return <Styled.Wrapper></Styled.Wrapper>;
};

export default ChallengeCard;
