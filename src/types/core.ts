export interface Pagination<T> {
  count: number
  next: Partial<string>
  previous: Partial<string>
  results: Array<T>
}

export interface PaginationParams {
  page: number
  page_size: number
}
