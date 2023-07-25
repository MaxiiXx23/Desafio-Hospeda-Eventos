import { CreateEventUseCase } from '../CreateEventUseCase'

import { PrismaEventsRepository } from '@/shared/http/repositories/eventsRepository/prisma/PrismaEventsRepository'
import { PrismaAddressRepository } from '@/shared/http/repositories/addressRepository/prisma/PrismaAddressRepository'

export function makeCreateEventUseCase(): CreateEventUseCase {
  const eventsRepository = new PrismaEventsRepository()
  const addressRepository = new PrismaAddressRepository()

  const createEventUseCase = new CreateEventUseCase(
    eventsRepository,
    addressRepository,
  )

  return createEventUseCase
}
