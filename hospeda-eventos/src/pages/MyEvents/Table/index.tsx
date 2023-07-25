import { useContext } from 'react'
import { EventsContext } from '@/contexts/EventsContext'

import { ItemEvent } from '../ItemEvent'

import {
  ContainerTable,
  HeaderTable,
  Tbody,
  ThTable,
  TrTableHeader,
} from './styles'

export function Table() {
  const { events } = useContext(EventsContext)

  return (
    <ContainerTable>
      <HeaderTable>
        <TrTableHeader>
          <ThTable>
            <span>Evento</span>
          </ThTable>
          <ThTable>
            <span>Hospedagens</span>
          </ThTable>
          <ThTable>
            <span>Privacidade</span>
          </ThTable>
        </TrTableHeader>
      </HeaderTable>
      <Tbody>
        {events.map((item) => (
          <ItemEvent key={item.id} event={item} />
        ))}
      </Tbody>
    </ContainerTable>
  )
}
