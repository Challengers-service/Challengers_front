import ChallengeCardList from "components/challenge/ChallengeCardList";
import useChallengeLoad from "hooks/queries/challenge/useChallengeLoad";
import { useOutletContext } from "react-router";
import { useSetRecoilState } from "recoil";
import { searchChallengeLengthAtom } from "stores/home";

type OutletProps = {
  challengeName: string;
};

const HomeSearchPage = () => {
  const setChallengeLength = useSetRecoilState(searchChallengeLengthAtom);
  const { challengeName } = useOutletContext<OutletProps>();
  const { data, viewElement } = useChallengeLoad({
    tab: "popular",
    challengeName,
  });
  setChallengeLength(data?.pages[0].totalElements || null);
  return (
    <>
      <ChallengeCardList challengeResults={data?.pages} />
      {viewElement}
    </>
  );
};

export default HomeSearchPage;
