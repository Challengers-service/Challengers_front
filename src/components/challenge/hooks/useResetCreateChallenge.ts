import { useResetRecoilState } from "recoil";
import {
  challengeStepAtom,
  challengeStepThreeAtom,
  challengeStepTwoAtom,
  challengeTagsAtom,
  selectCategoryAtom,
} from "stores/challenge";

const useResetCreateChallenge = () => {
  const resetStepOne = useResetRecoilState(selectCategoryAtom);
  const resetStepTwo = useResetRecoilState(challengeStepTwoAtom);
  const resetStepThree = useResetRecoilState(challengeStepThreeAtom);
  const resetStep = useResetRecoilState(challengeStepAtom);
  const resetTag = useResetRecoilState(challengeTagsAtom);

  const reset = () => {
    resetStepOne();
    resetStepTwo();
    resetStepThree();
    resetStep();
    resetTag();
  };

  return { reset };
};

export default useResetCreateChallenge;
