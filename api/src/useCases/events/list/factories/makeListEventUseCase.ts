import { ListEventsUseCase } from '../ListEventsUseCase'

import { PrismaEventsRepository } from '@/shared/http/repositories/eventsRepository/prisma/PrismaEventsRepository'

export function makeListEventUseCase(): ListEventsUseCase {
  const eventsRepository = new PrismaEventsRepository()

  const listEventsUseCase = new ListEventsUseCase(eventsRepository)

  return listEventsUseCase
}
