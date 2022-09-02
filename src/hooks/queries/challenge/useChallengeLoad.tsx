import { useInfiniteQuery } from "@tanstack/react-query";
import QUERY_KEYS from "constants/queryKeys";
import { getChallenge } from "lib/apis/challenge";
import { Tab } from "lib/apis/challenge/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function useChallengeLoad(tab: Tab) {
  const { ref, inView } = useInView();
  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery(
    [QUERY_KEYS.CHALLENGES, tab],
    ({ pageParam = 0 }) => getChallenge({ page: pageParam, tab }),
    {
      getNextPageParam: lastPage =>
        !lastPage.last ? lastPage.pageable.pageNumber + 1 : undefined,
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    if (inView && !hasNextPage && !isFetching) fetchNextPage();
  }, [inView, hasNextPage, isFetching]);

  return {
    data,
    viewElement: <div ref={ref} />,
  };
}

export default useChallengeLoad;
