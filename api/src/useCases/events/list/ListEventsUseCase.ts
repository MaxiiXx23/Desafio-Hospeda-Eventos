import { Event } from '@prisma/client'

import { IEventsRepository } from '@/shared/http/repositories/eventsRepository/IEventsRepository'

import { PaginationIsInvalidError } from './errors/PaginationIsInvalidError'

interface IRequest {
  page: number
}

interface IResponse {
  events: Event[]
}

export class ListEventsUseCase {
  constructor(private eventsRepository: IEventsRepository) {}

  async execute({ page }: IRequest): Promise<IResponse> {
    if (!page || page < 1) {
      throw new PaginationIsInvalidError()
    }

    const events = await this.eventsRepository.listByPage(page)

    return {
      events,
    }
  }
}
