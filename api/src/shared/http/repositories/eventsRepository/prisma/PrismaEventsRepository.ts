import { Prisma, Event } from '@prisma/client'

import { prismaConnection } from '@/lib/prisma/prismaConnection'

import {
  EventResponse,
  IEventUpdate,
  IEventsRepository,
} from '../IEventsRepository'

export class PrismaEventsRepository implements IEventsRepository {
  async findByIdsQuery(id: string, page: number): Promise<Event[]> {
    const take = 10
    const skip = (page - 1) * take

    const events = await prismaConnection.event.findMany({
      where: {
        id,
      },
      include: {
        Address: {
          select: {
            city: true,
            state: true,
          },
        },
      },
      take,
      skip,
      orderBy: {
        name: 'asc',
      },
    })

    return events
  }

  async findById(id: string): Promise<EventResponse | null> {
    const event = await prismaConnection.event.findUnique({
      where: {
        id,
      },
      include: {
        Address: {
          select: {
            id: true,
            cep: true,
            street: true,
            number: true,
            complement: true,
            district: true,
            city: true,
            state: true,
            created_at: true,
          },
        },
      },
    })

    return event
  }

  async findByName(name: string): Promise<Event[]> {
    const event = await prismaConnection.event.findMany({
      where: {
        name,
      },
    })

    return event
  }

  async create({
    name,
    privacy,
    description,
    dateInitial,
    hourInitial,
  }: Prisma.EventUncheckedCreateInput): Promise<Event> {
    const event = await prismaConnection.event.create({
      data: {
        name,
        privacy,
        description,
        dateInitial,
        hourInitial,
      },
      include: {
        Address: {
          select: {
            id: true,
            cep: true,
            street: true,
            number: true,
            complement: true,
            district: true,
            city: true,
            state: true,
          },
        },
      },
    })

    return event
  }

  async listByPage(page: number): Promise<Event[]> {
    const take = 10
    const skip = (page - 1) * take

    const events = await prismaConnection.event.findMany({
      include: {
        Address: {
          select: {
            city: true,
            state: true,
          },
        },
      },
      take,
      skip,
      orderBy: {
        name: 'asc',
      },
    })

    return events
  }

  async fetchByQuery(query: string, page: number): Promise<Event[]> {
    const take = 10
    const skip = (page - 1) * take

    const events = await prismaConnection.event.findMany({
      where: {
        name: {
          contains: query,
        },
      },
      include: {
        Address: {
          select: {
            city: true,
            state: true,
          },
        },
      },

      take,
      skip,
    })

    return events
  }

  async update({
    id,
    name,
    description,
    privacy,
    dateInitial,
    hourInitial,
  }: IEventUpdate): Promise<Event> {
    const event = await prismaConnection.event.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        privacy,
        dateInitial,
        hourInitial,
      },
      include: {
        Address: {
          select: {
            id: true,
            cep: true,
            street: true,
            number: true,
            complement: true,
            district: true,
            city: true,
            state: true,
            created_at: true,
          },
        },
      },
    })

    return event
  }

  async delete(id: string): Promise<Event | null> {
    const eventDeleted = await prismaConnection.event.delete({
      where: {
        id,
      },
    })

    return eventDeleted
  }
}
