import { Event } from '@prisma/client'

import { EventNotFoundError } from '@/shared/http/errors/EventNotFoundError'
import { IEventsRepository } from '@/shared/http/repositories/eventsRepository/IEventsRepository'
import { IAddressRepository } from '@/shared/http/repositories/addressRepository/IAddressRepository'

interface IRequest {
  id: string
}

interface IResponse {
  event: Event
  hasDelete: boolean
}

export class DeleteEventUseCase {
  constructor(
    private eventsRepository: IEventsRepository,
    private addressRepository: IAddressRepository,
  ) {}

  async execute({ id }: IRequest): Promise<IResponse> {
    const event = await this.eventsRepository.findById(id)

    if (!event) {
      throw new EventNotFoundError()
    }

    await this.addressRepository.delete(event.Address[0].id)

    await this.eventsRepository.delete(event.id)

    return {
      event,
      hasDelete: true,
    }
  }
}
