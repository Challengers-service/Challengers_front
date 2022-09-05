import { useInfiniteQuery } from "@tanstack/react-query";
import QUERY_KEYS from "constants/queryKeys";
import { getChallenge } from "lib/apis/challenge";
import { Tab } from "lib/apis/challenge/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface UseChallengeLoad {
  tab: Tab;
  challengeName?: string;
}

function useChallengeLoad({ tab, challengeName }: UseChallengeLoad) {
  const { ref, inView } = useInView();
  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery(
    [QUERY_KEYS.CHALLENGES, tab, challengeName],
    ({ pageParam = 0 }) =>
      getChallenge({ page: pageParam, tab, challengeName }),
    {
      getNextPageParam: lastPage =>
        !lastPage.last ? lastPage.pageable.pageNumber + 1 : undefined,
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    if (inView && !hasNextPage && !isFetching) fetchNextPage();
  }, [inView, hasNextPage, isFetching, fetchNextPage]);

  return {
    data,
    viewElement: <div ref={ref} />,
  };
}

export default useChallengeLoad;
