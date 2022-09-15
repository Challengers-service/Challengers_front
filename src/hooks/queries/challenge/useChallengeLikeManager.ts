import { useMutation } from "@tanstack/react-query";
import { likeChallenge, unlikeChallenge } from "lib/apis/challenge";
import { UseMutationOptionsOf } from "lib/type";

const useChallengeLike = (
  challengeId: number,
  options: UseMutationOptionsOf<typeof likeChallenge> = {}
) => {
  return useMutation(() => likeChallenge(challengeId), options);
};

const useChallengeUnLike = (
  challengeId: number,
  options: UseMutationOptionsOf<typeof unlikeChallenge> = {}
) => {
  return useMutation(() => unlikeChallenge(challengeId), options);
};

export { useChallengeLike, useChallengeUnLike };
