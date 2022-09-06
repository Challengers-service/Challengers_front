import ChallengeCardList from "components/challenge/ChallengeCardList";
import useChallengeLoad from "hooks/queries/challenge/useChallengeLoad";
import { Tab } from "lib/apis/challenge/types";
import { useEffect } from "react";
import { useOutletContext } from "react-router";

type OutletProps = {
  challengeName: string;
  setChallengeLength(length: number | null): void;
  tab: Tab;
};

const HomeSearchPage = () => {
  const { tab, challengeName, setChallengeLength } =
    useOutletContext<OutletProps>();
  const { data, viewElement } = useChallengeLoad({
    tab,
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

export default HomeSearchPage;
