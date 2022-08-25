import { useResetRecoilState } from "recoil";
import {
  challengeStepThreeAtom,
  challengeStepTwoAtom,
  selectCategoryAtom,
} from "stores/challenge";

const useResetCreateChallenge = () => {
  const resetStepOne = useResetRecoilState(selectCategoryAtom);
  const resetStepTwo = useResetRecoilState(challengeStepTwoAtom);
  const resetStepThree = useResetRecoilState(challengeStepThreeAtom);

  const reset = () => {
    resetStepOne();
    resetStepTwo();
    resetStepThree();
  };

  return { reset };
};

export default useResetCreateChallenge;
