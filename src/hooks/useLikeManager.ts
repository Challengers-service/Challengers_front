import { useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "constants/queryKeys";
import useChallengeDetail from "hooks/queries/challenge/useChallengeDetail";
import {
  useChallengeLike,
  useChallengeUnLike,
} from "hooks/queries/challenge/useChallengeLikeManager";
import { Challenge } from "lib/apis/challenge/types";
import { useCallback } from "react";

function useLikeManager(challengeId: number) {
  const queryClient = useQueryClient();
  const likeMutation = useChallengeLike(challengeId, {
    onMutate: async () => {
      await queryClient.cancelQueries(
        useChallengeDetail.extractKey(challengeId)
      );
      const previousChallenge = queryClient.getQueryData<Challenge>(
        useChallengeDetail.extractKey(challengeId)
      );
      queryClient.setQueryData<Challenge | undefined>(
        useChallengeDetail.extractKey(challengeId),
        oldChallenge =>
          oldChallenge && {
            ...oldChallenge,
            cart: true,
          }
      );
      return previousChallenge;
    },
    onError: (error, variables, previousChallenge) => {
      if (previousChallenge) {
        queryClient.setQueryData(
          useChallengeDetail.extractKey(challengeId),
          previousChallenge
        );
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.CHALLENGES]);
      alert("찜 목록에 추가되었습니다.");
    },
  });

  const unLikeMutation = useChallengeUnLike(challengeId, {
    onMutate: async () => {
      await queryClient.cancelQueries(
        useChallengeDetail.extractKey(challengeId)
      );
      const previousChallenge = queryClient.getQueryData<Challenge>(
        useChallengeDetail.extractKey(challengeId)
      );
      queryClient.setQueryData<Challenge | undefined>(
        useChallengeDetail.extractKey(challengeId),
        oldChallenge =>
          oldChallenge && {
            ...oldChallenge,
            cart: false,
          }
      );
      return previousChallenge;
    },
    onError: (error, variables, previousChallenge) => {
      if (previousChallenge) {
        queryClient.setQueryData(
          useChallengeDetail.extractKey(challengeId),
          previousChallenge
        );
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.CHALLENGES]);
      alert("찜 목록에 삭제되었습니다.");
    },
  });

  const like = useCallback(() => {
    likeMutation.mutate(challengeId);
  }, [challengeId, likeMutation]);

  const unLike = useCallback(() => {
    unLikeMutation.mutate(challengeId);
  }, [challengeId, unLikeMutation]);

  return { like, unLike };
}

export default useLikeManager;
