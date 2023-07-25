import { Event } from '@prisma/client'

import { IEventsRepository } from '@/shared/http/repositories/eventsRepository/IEventsRepository'
import { getStateByQuery } from '@/utils/getStateByQuery'
import { IAddressRepository } from '@/shared/http/repositories/addressRepository/IAddressRepository'

interface IRequest {
  query: string
  page: number
}

interface IResponse {
  events: Event[]
}

export class FetchByQueryUseCase {
  constructor(
    private eventsRepository: IEventsRepository,
    private addressRepository: IAddressRepository,
  ) {}

  async execute({ query, page }: IRequest): Promise<IResponse> {
    let eventsFiltered: Event[] = []

    const state = getStateByQuery(query)

    if (state) {
      const events = await this.addressRepository.findByQuery(state.uf, page)

      await Promise.all(
        events.map(async (item) => {
          const event = await this.eventsRepository.findByIdsQuery(
            item.eventId,
            page,
          )

          eventsFiltered = [...eventsFiltered, ...event]
        }),
      )

      return {
        events: eventsFiltered,
      }
    }

    const eventsByCity = await this.addressRepository.findByQuery(query, page)

    if (eventsByCity.length > 0) {
      await Promise.all(
        eventsByCity.map(async (item) => {
          const event = await this.eventsRepository.findByIdsQuery(
            item.eventId,
            page,
          )

          eventsFiltered = [...eventsFiltered, ...event]
        }),
      )

      return {
        events: eventsFiltered,
      }
    }

    const events = await this.eventsRepository.fetchByQuery(query, page)

    return {
      events,
    }
  }
}
