import { PrismaEventsRepository } from '@/shared/http/repositories/eventsRepository/prisma/PrismaEventsRepository'
import { GetEventUseCase } from '../GetEventUseCase'

export function makeGetEventUseCase(): GetEventUseCase {
  const eventsRepository = new PrismaEventsRepository()

  const getEventUseCase = new GetEventUseCase(eventsRepository)

  return getEventUseCase
}
