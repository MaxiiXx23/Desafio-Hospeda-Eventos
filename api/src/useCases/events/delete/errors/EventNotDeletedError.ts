export class EventNotDeletedError extends Error {
  constructor() {
    super('Event not deleted.')
  }
}
