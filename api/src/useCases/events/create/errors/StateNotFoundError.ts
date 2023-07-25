export class StateNotFoundError extends Error {
  constructor() {
    super('State not found.')
  }
}
