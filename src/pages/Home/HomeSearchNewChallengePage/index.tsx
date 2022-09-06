import ChallengeCardList from "components/challenge/ChallengeCardList";
import useChallengeLoad from "hooks/queries/challenge/useChallengeLoad";
import { useEffect } from "react";
import { useOutletContext } from "react-router";

type OutletProps = {
  challengeName: string;
  setChallengeLength(length: number | null): void;
};

const HomeSearchNewChallengePage = () => {
  const { challengeName, setChallengeLength } = useOutletContext<OutletProps>();
  const { data, viewElement } = useChallengeLoad({
    tab: "new",
    challengeName,
  });

  useEffect(() => {
    if (data) {
      setChallengeLength(data.pages[0].numberOfElements);
    }
  }, [data, setChallengeLength]);
  return (
    <>
      <ChallengeCardList challengeResults={data?.pages} />
      {viewElement}
    </>
  );
};

export default HomeSearchNewChallengePage;
