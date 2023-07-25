export class EventNotFoundError extends Error {
  constructor() {
    super('Evento not found.')
  }
}
