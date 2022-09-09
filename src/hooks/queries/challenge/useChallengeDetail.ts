import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "constants/queryKeys";
import { getChallengeWithId } from "lib/apis/challenge";
import { UseQueryOptionsOf } from "lib/type";

const useChallengeDetail = (
  challengeId: number,
  options: UseQueryOptionsOf<typeof getChallengeWithId> = {}
) => {
  return useQuery(
    extractKey(challengeId),
    () => getChallengeWithId(challengeId),
    options
  );
};

const extractKey = (challengeId: number) => [
  QUERY_KEYS.CHALLENGES,
  challengeId,
];

useChallengeDetail.extractKey = extractKey;

export default useChallengeDetail;
