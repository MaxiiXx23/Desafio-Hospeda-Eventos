export class PaginationIsInvalidError extends Error {
  constructor() {
    super('Pagination is invalid.')
  }
}
