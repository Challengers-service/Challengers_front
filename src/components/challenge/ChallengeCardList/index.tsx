import { GetChallenge } from "lib/apis/challenge/types";
import ChallengeCard from "../ChallengeCard";
import * as Styled from "./ChallengeCardListStyled";

export interface Props {
  challenges: GetChallenge[];
}

const ChallengeCardList = ({ challenges }: Props) => {
  return (
    <Styled.Wrapper>
      {challenges.map(challenge => (
        <ChallengeCard key={challenge.challengeId} challenge={challenge} />
      ))}
    </Styled.Wrapper>
  );
};

export default ChallengeCardList;
