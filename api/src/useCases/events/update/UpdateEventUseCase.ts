import { Event, Privacy } from '@prisma/client'

import { IAddressRepository } from '@/shared/http/repositories/addressRepository/IAddressRepository'
import { IEventsRepository } from '@/shared/http/repositories/eventsRepository/IEventsRepository'

import { EventNotFoundError } from '@/shared/http/errors/EventNotFoundError'
import { DateIsInvalidError } from '../../../shared/http/errors/DateIsInvalidError'

import { returnDateInitial } from '@/utils/returnDateInitial'

interface IRequest {
  id: string
  name: string
  privacy: boolean
  description: string
  dateInitial: string
  hourInitial: string
  cep: string
  street: string
  number: number
  complement: string
  district: string
  city: string
  state: string
}

interface IResponse {
  eventUpdated: Event
}

export class UpdateEventUseCase {
  constructor(
    private eventsRepository: IEventsRepository,
    private addressRepository: IAddressRepository,
  ) {}

  async execute({
    id,
    name,
    privacy,
    description,
    dateInitial,
    hourInitial,
    cep,
    street,
    number,
    complement,
    district,
    city,
    state,
  }: IRequest): Promise<IResponse> {
    const dateInitialUpdated = returnDateInitial(dateInitial)

    if (!dateInitialUpdated) {
      throw new DateIsInvalidError()
    }

    const hasEvent = await this.eventsRepository.findById(id)

    if (!hasEvent) {
      throw new EventNotFoundError()
    }

    const privacyEvent = privacy ? Privacy.PRIVITE : Privacy.PUBLIC

    const idAddress = hasEvent.Address[0].id

    await this.addressRepository.update({
      id: idAddress,
      cep,
      street,
      number,
      complement,
      district,
      city,
      state,
    })

    const eventUpdated = await this.eventsRepository.update({
      id,
      name,
      privacy: privacyEvent,
      description,
      dateInitial: dateInitialUpdated,
      hourInitial,
    })

    return {
      eventUpdated,
    }
  }
}
