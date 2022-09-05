import ChallengeCardList from "components/challenge/ChallengeCardList";
import useChallengeLoad from "hooks/queries/challenge/useChallengeLoad";

const HomePage = () => {
  const { data, viewElement } = useChallengeLoad({ tab: "popular" });
  return (
    <>
      <ChallengeCardList challengeResults={data?.pages} />
      {viewElement}
    </>
  );
};

export default HomePage;
