export interface ApiListResponse<TItem> {
  items: TItem[];
  total: number;
  page: number;
  pageSize: number;
}

export type PaginationQuery = {
  page?: number;
  pageSize?: number;
} & Record<string, string | number | boolean | null | undefined>;

export interface ApiSuccessResponse {
  success: boolean;
  message?: string;
}
