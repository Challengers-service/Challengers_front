import { useResetRecoilState } from "recoil";
import {
  challengeStepAtom,
  challengeStepThreeAtom,
  challengeStepTwoAtom,
  selectCategoryAtom,
} from "stores/challenge";

const useResetCreateChallenge = () => {
  const resetStepOne = useResetRecoilState(selectCategoryAtom);
  const resetStepTwo = useResetRecoilState(challengeStepTwoAtom);
  const resetStepThree = useResetRecoilState(challengeStepThreeAtom);
  const resetStep = useResetRecoilState(challengeStepAtom);

  const reset = () => {
    resetStepOne();
    resetStepTwo();
    resetStepThree();
    resetStep();
  };

  return { reset };
};

export default useResetCreateChallenge;
