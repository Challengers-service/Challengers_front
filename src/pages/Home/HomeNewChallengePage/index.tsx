import ChallengeCardList from "components/challenge/ChallengeCardList";
import useChallengeLoad from "hooks/queries/challenge/useChallengeLoad";

const HomeNewChallengePage = () => {
  const { data, viewElement } = useChallengeLoad({ tab: "new" });
  return (
    <>
      <ChallengeCardList challengeResults={data?.pages} />
      {viewElement}
    </>
  );
};

export default HomeNewChallengePage;
