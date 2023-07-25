import { IEventTestDTO } from '@/dtos/IEventTestDTO'

interface IFilterQueryProps {
  events: IEventTestDTO[]
  query: string
}

export function filterQueryTest({ query, events }: IFilterQueryProps) {
  const eventsFiltered: IEventTestDTO[] = [...events]
  const eventsFilteredEmpty: IEventTestDTO[] = []

  const filterByName = eventsFiltered.filter((event) =>
    event.name.includes(query),
  )

  if (filterByName.length >= 1) {
    return filterByName
  }

  const filterByState = eventsFiltered.filter((event) =>
    event.address.state.includes(query),
  )

  if (filterByState.length >= 1) {
    return filterByState
  }

  const filterByCity = eventsFiltered.filter((event) =>
    event.address.city.includes(query),
  )

  if (filterByCity.length >= 1) {
    return filterByCity
  }

  return eventsFilteredEmpty
}
