import { UpdateEventUseCase } from '../UpdateEventUseCase'

import { PrismaEventsRepository } from '@/shared/http/repositories/eventsRepository/prisma/PrismaEventsRepository'
import { PrismaAddressRepository } from '@/shared/http/repositories/addressRepository/prisma/PrismaAddressRepository'

export function makeUpdateEventUseCase(): UpdateEventUseCase {
  const eventsRepository = new PrismaEventsRepository()
  const addressRepository = new PrismaAddressRepository()

  const updateEventUseCase = new UpdateEventUseCase(
    eventsRepository,
    addressRepository,
  )

  return updateEventUseCase
}
