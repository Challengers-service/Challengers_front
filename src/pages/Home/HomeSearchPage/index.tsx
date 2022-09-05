import ChallengeCardList from "components/challenge/ChallengeCardList";
import useChallengeLoad from "hooks/queries/challenge/useChallengeLoad";
import { useOutletContext } from "react-router";

type OutletProps = {
  challengeName: string;
};

const HomeSearchPage = () => {
  const { challengeName } = useOutletContext<OutletProps>();
  const { data, viewElement } = useChallengeLoad({
    tab: "popular",
    challengeName,
  });
  return (
    <>
      <ChallengeCardList challengeResults={data?.pages} />
      {viewElement}
    </>
  );
};

export default HomeSearchPage;
