import { Event, Prisma, Privacy } from '@prisma/client'

import {
  EventResponse,
  IEventUpdate,
  IEventsRepository,
} from '../IEventsRepository'

// Class que será usado para futuros testes unitários

export class InMemoryEventsRepository implements IEventsRepository {
  public items: Event[] = []

  async findByName(name: string): Promise<Event[]> {
    throw new Error('Method not implemented.')
  }

  async findById(id: string): Promise<EventResponse> {
    throw new Error('Method not implemented.')
  }

  async findByIdsQuery(id: string, page: number): Promise<Event[]> {
    throw new Error('Method not implemented.')
  }

  async listByPage(page: number): Promise<Event[]> {
    throw new Error('Method not implemented.')
  }

  async fetchByQuery(query: string, page: number): Promise<Event[]> {
    throw new Error('Method not implemented.')
  }

  async create(data: Prisma.EventUncheckedCreateInput): Promise<Event> {
    throw new Error('Method not implemented.')
  }

  async update(data: IEventUpdate): Promise<Event> {
    throw new Error('Method not implemented.')
  }

  async delete(id: string): Promise<Event | null> {
    throw new Error('Method not implemented.')
  }
}
