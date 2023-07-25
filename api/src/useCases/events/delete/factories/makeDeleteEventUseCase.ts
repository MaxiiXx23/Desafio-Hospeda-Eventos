import { PrismaEventsRepository } from '@/shared/http/repositories/eventsRepository/prisma/PrismaEventsRepository'
import { DeleteEventUseCase } from '../DeleteEventUseCase'
import { PrismaAddressRepository } from '@/shared/http/repositories/addressRepository/prisma/PrismaAddressRepository'

export function makeDeleteEventUseCase(): DeleteEventUseCase {
  const eventsRepository = new PrismaEventsRepository()
  const addressRepository = new PrismaAddressRepository()

  const deleteEventUsecase = new DeleteEventUseCase(
    eventsRepository,
    addressRepository,
  )

  return deleteEventUsecase
}
