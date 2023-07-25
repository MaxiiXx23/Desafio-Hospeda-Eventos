import { useContext } from 'react'

import { DotsThree, PencilSimpleLine, Trash } from '@phosphor-icons/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { toast } from 'react-toastify'

import { EventsContext } from '@/contexts/EventsContext'

import { Btn, BtnDropdown, Content, Root, Item, BtnNavLink } from './styles'

interface IProps {
  idEvent: string
}

export function Menudropdown({ idEvent }: IProps) {
  const { deleteEvent } = useContext(EventsContext)

  async function handleDeleteEvent(id: string) {
    try {
      await deleteEvent(id)

      toast.info('Evento deletado com sucesso!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } catch {
      toast.error('Erro ao deletar evento. Por favor, tente novamente.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  return (
    <Root>
      <DropdownMenu.Trigger asChild>
        <BtnDropdown aria-label="mais opções">
          <DotsThree size={32} />
        </BtnDropdown>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Content sideOffset={5}>
          <Item>
            <BtnNavLink
              to={`/formEvent/${idEvent}`}
              color="edit"
              aria-label="Página editar evento"
            >
              <PencilSimpleLine size={14} /> Editar
            </BtnNavLink>
          </Item>
          <Item color="delete" className="DropdownMenuItem">
            <Btn
              type="button"
              onClick={() => handleDeleteEvent(idEvent)}
              color="delete"
              aria-label="Botão excluir evento"
            >
              <Trash size={14} /> Excluir
            </Btn>
          </Item>
        </Content>
      </DropdownMenu.Portal>
    </Root>
  )
}
