import { Event, Prisma, Privacy } from '@prisma/client'

export interface IEventUpdate {
  id: string
  name: string
  description: string
  dateInitial: Date
  hourInitial: string
  privacy: Privacy
}

export type EventResponse = Prisma.EventGetPayload<{
  include: {
    Address: {
      select: {
        id: true
        cep: true
        street: true
        number: true
        complement: true
        district: true
        city: true
        state: true
        created_at: true
      }
    }
  }
}>
export interface IEventsRepository {
  findByName(name: string): Promise<Event[]>
  findById(id: string): Promise<EventResponse | null>
  findByIdsQuery(id: string, page: number): Promise<Event[]>
  listByPage(page: number): Promise<Event[]>
  fetchByQuery(query: string, page: number): Promise<Event[]>
  create(data: Prisma.EventUncheckedCreateInput): Promise<Event>
  update(data: IEventUpdate): Promise<Event>
  delete(id: string): Promise<Event | null>
}
