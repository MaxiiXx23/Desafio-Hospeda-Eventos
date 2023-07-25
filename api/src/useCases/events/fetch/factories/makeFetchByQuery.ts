import { PrismaAddressRepository } from '@/shared/http/repositories/addressRepository/prisma/PrismaAddressRepository'
import { FetchByQueryUseCase } from '../FetchByQueryUseCase'

import { PrismaEventsRepository } from '@/shared/http/repositories/eventsRepository/prisma/PrismaEventsRepository'

export function makeFetchByQuery(): FetchByQueryUseCase {
  const eventsRepository = new PrismaEventsRepository()
  const addressRepository = new PrismaAddressRepository()

  const fetchByQueryUseCase = new FetchByQueryUseCase(
    eventsRepository,
    addressRepository,
  )

  return fetchByQueryUseCase
}
