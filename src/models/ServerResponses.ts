interface IMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
export interface FetchResponse<T> {
  data: T;
  meta: IMeta | {};
}
