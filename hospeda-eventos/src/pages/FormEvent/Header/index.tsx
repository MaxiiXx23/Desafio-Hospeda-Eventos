import { useParams } from 'react-router-dom'

import { CaretLeft } from '@phosphor-icons/react'

import IconSite from '@/assets/icons/iconSite.svg'

import { BackNav, ContainerHeader, WrapperIcon } from './styles'

export function Header() {
  const { id } = useParams()

  const textBackNav = id ? 'Editar Evento' : 'Criar Evento'

  return (
    <ContainerHeader>
      <BackNav to="/">
        <CaretLeft size={20} />
        <strong>{textBackNav}</strong>
      </BackNav>
      <WrapperIcon>
        <img src={IconSite} alt="ícone site" title="Ícone hospeda eventos" />
        <strong>Hospeda Eventos</strong>
      </WrapperIcon>
    </ContainerHeader>
  )
}
