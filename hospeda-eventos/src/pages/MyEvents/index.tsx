import { useEffect, useState, useContext } from 'react'

import { EventsContext } from '@/contexts/EventsContext'

import { InputSearch } from '@/components/InputSearch'
import { Table } from './Table'

import {
  ContainerMain,
  ContainerSection,
  Header,
  Title,
  WrapperInput,
} from './styles'
import { ButtonLink } from '@/components/ButtonLink'

export function MyEvents() {
  const { loadingListEvents, loadingListByQuery } = useContext(EventsContext)

  const [numberPagination, setNumberPagination] = useState<number>(1)
  const [search, setSearch] = useState<string>('')

  function handleChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  useEffect(() => {
    async function getListEvents(numberPagination: number) {
      loadingListEvents(numberPagination)
    }

    if (!search) {
      getListEvents(numberPagination)
    }
  }, [numberPagination, search, loadingListEvents])

  useEffect(() => {
    async function getEventsByQuery(numberPagination: number, search: string) {
      await loadingListByQuery(numberPagination, search)
    }

    if (search) {
      getEventsByQuery(numberPagination, search)
    }
  }, [search, numberPagination])

  return (
    <ContainerMain>
      <ContainerSection>
        <Header>
          <Title>Meus eventos</Title>
          <WrapperInput>
            <InputSearch
              placeholderText="Buscar Eventos"
              onChange={handleChangeSearch}
              aria-label="Buscar eventos"
            />
            <ButtonLink
              to="/formEvent"
              textBtn="Criar evento"
              ariaLabel="Página criar evento"
            />
          </WrapperInput>
        </Header>
        <Table />
      </ContainerSection>
    </ContainerMain>
  )
}
