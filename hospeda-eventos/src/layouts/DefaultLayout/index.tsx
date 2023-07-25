import { Outlet } from 'react-router-dom'

import { Header } from '@/components/Header'
import { ContainerMain } from './styles'
import { MenuAside } from '@/components/MenuAside'
import { EventsContextProvider } from '@/contexts/EventsContext'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <ContainerMain>
        <MenuAside />
        <EventsContextProvider>
          <Outlet />
        </EventsContextProvider>
      </ContainerMain>
    </>
  )
}
