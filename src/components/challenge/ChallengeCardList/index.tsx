import { GetChallengeResult } from "lib/apis/challenge/types";
import ChallengeCard from "../ChallengeCard";
import * as Styled from "./ChallengeCardListStyled";

export interface Props {
  challengeResults?: GetChallengeResult[];
}

const ChallengeCardList = ({ challengeResults }: Props) => {
  return (
    <Styled.Wrapper>
      {challengeResults?.map(challengeResult => {
        return challengeResult.content.map(challenge => (
          <ChallengeCard key={challenge.challengeId} challenge={challenge} />
        ));
      })}
    </Styled.Wrapper>
  );
};

export default ChallengeCardList;
