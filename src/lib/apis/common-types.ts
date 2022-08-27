export interface Pagination {
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: false;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  sort: {
    sorted: false;
    unsorted: boolean;
    empty: boolean;
  };
  number: number;
  first: boolean;
  numberOfElements: number;
  size: number;
  empty: false;
}
