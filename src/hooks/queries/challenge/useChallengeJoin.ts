import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "constants/queryKeys";
import { joinChallenge } from "lib/apis/challenge";
import { Challenge } from "lib/apis/challenge/types";
import { UseMutationOptionsOf } from "lib/type";
import useChallengeDetail from "./useChallengeDetail";

const useChallengeJoin = (
  challengeId: number,
  options: UseMutationOptionsOf<typeof joinChallenge> = {}
) => {
  const queryClient = useQueryClient();
  return useMutation(() => joinChallenge(challengeId), {
    onMutate: async () => {
      await queryClient.cancelQueries(
        useChallengeDetail.extractKey(Number(challengeId))
      );
      const previousChallenge = queryClient.getQueryData<Challenge>(
        useChallengeDetail.extractKey(Number(challengeId))
      );
      queryClient.setQueryData<Challenge | undefined>(
        useChallengeDetail.extractKey(Number(challengeId)),
        oldChallenge =>
          oldChallenge && {
            ...oldChallenge,
            hasJoined: true,
          }
      );
      return previousChallenge;
    },
    onError: (error, variables, previousChallenge) => {
      if (previousChallenge) {
        queryClient.setQueryData(
          useChallengeDetail.extractKey(Number(challengeId)),
          previousChallenge
        );
      }
      const {
        data: { status, message },
      } = error.response;
      if (status === "400") alert(message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.CHALLENGES]);
      alert("챌린지에 참가되었습니다.");
    },
    ...options,
  });
};

export default useChallengeJoin;
