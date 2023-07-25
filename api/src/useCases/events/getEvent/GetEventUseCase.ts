import { IEventsRepository } from '@/shared/http/repositories/eventsRepository/IEventsRepository'

import { EventNotFoundError } from '@/shared/http/errors/EventNotFoundError'

import { Event } from '@prisma/client'

interface IRequest {
  id: string
}

interface IResponse {
  event: Event
}

export class GetEventUseCase {
  constructor(private eventsRepository: IEventsRepository) {}

  async execute({ id }: IRequest): Promise<IResponse> {
    const event = await this.eventsRepository.findById(id)

    if (!event) {
      throw new EventNotFoundError()
    }

    return {
      event,
    }
  }
}
