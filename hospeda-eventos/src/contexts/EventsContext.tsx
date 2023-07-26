import { ReactNode, createContext, useState } from 'react'

import { AxiosResponse } from 'axios'

import { IEventDTO } from '@/dtos/IEventDTO'
import { axiosApi } from '@/lib/axios/axiosApi'

interface IEventsContext {
  events: IEventDTO[]
  loadingListEvents: (numberPagination: number) => Promise<void>
  loadingListByQuery: (
    numberPagination: number,
    search: string,
  ) => Promise<void>
  deleteEvent: (id: string) => Promise<void>
}

interface IEventsContextProvider {
  children: ReactNode
}

interface IResponseAxiosList {
  events: IEventDTO[]
}

// interface IResponseAxios {
//   events: IEventDTO
// }

export const EventsContext = createContext<IEventsContext>({} as IEventsContext)

export function EventsContextProvider({ children }: IEventsContextProvider) {
  const [events, setEvents] = useState<IEventDTO[]>([])

  async function loadingListEvents(numberPagination: number) {
    const { data }: AxiosResponse<IResponseAxiosList> = await axiosApi.get(
      `/events/list/${numberPagination}`,
    )

    setEvents([...data.events])
  }

  async function loadingListByQuery(numberPagination: number, search: string) {
    const { data }: AxiosResponse<IResponseAxiosList> = await axiosApi.get(
      `/events/search?query=${search}&page=${numberPagination}`,
    )

    setEvents([...data.events])
  }

  async function deleteEvent(id: string) {
    await axiosApi.delete(`/events/delete/${id}`)
    const newArrayEvents = events.filter((event) => event.id !== id)

    console.log('arrays delets')
    console.log(newArrayEvents)

    setEvents([...newArrayEvents])
  }

  return (
    <EventsContext.Provider
      value={{
        events,
        loadingListEvents,
        loadingListByQuery,
        deleteEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  )
}
