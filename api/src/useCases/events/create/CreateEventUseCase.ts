import { Event, Prisma, Privacy } from '@prisma/client'

import { IAddressRepository } from '@/shared/http/repositories/addressRepository/IAddressRepository'
import { IEventsRepository } from '@/shared/http/repositories/eventsRepository/IEventsRepository'

import { returnDateInitial } from '@/utils/returnDateInitial'
import { compareDateEvent } from '@/utils/compareDateEvent'
import { formatDate } from '@/utils/formatDate'
import { getUfState } from '@/utils/getUfState'

import { EventAlreadyExistsError } from './errors/EventAlreadyExistsError'
import { DateIsInvalidError } from '../../../shared/http/errors/DateIsInvalidError'
import { StateNotFoundError } from './errors/StateNotFoundError'
import { EventNotFoundError } from '@/shared/http/errors/EventNotFoundError'

interface IRequest {
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

type EventResponse = Prisma.EventGetPayload<{
  include: {
    Address: true
  }
}>

interface IResponse {
  event: Event
}

export class CreateEventUseCase {
  constructor(
    private eventsRepository: IEventsRepository,
    private addressRepository: IAddressRepository,
  ) {}

  async execute({
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
    const dateInitialFormatted = returnDateInitial(dateInitial)

    if (!dateInitialFormatted) {
      throw new DateIsInvalidError()
    }

    const ufState = getUfState(state)

    if (!ufState) {
      throw new StateNotFoundError()
    }

    const hasAlreadyEvents = await this.eventsRepository.findByName(name)

    if (hasAlreadyEvents) {
      hasAlreadyEvents.forEach((event) => {
        const dateInitialFormatted = formatDate(dateInitial)

        const diffBetweenDays = compareDateEvent(
          dateInitialFormatted,
          event.dateInitial,
        )

        if (diffBetweenDays <= 0) {
          throw new EventAlreadyExistsError()
        }
      })
    }

    const privacyEvent = privacy ? Privacy.PRIVITE : Privacy.PUBLIC

    const newEvent = await this.eventsRepository.create({
      name,
      privacy: privacyEvent,
      description,
      dateInitial: dateInitialFormatted,
      hourInitial,
    })

    await this.addressRepository.create({
      cep,
      street,
      number,
      complement,
      district,
      city,
      state,
      eventId: newEvent.id,
    })

    const event = await this.eventsRepository.findById(newEvent.id)

    if (!event) {
      throw new EventNotFoundError()
    }

    return {
      event,
    }
  }
}
