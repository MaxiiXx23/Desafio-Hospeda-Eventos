import { useFormContext } from 'react-hook-form'

import {
  ListBullets,
  ListNumbers,
  Paperclip,
  TextAa,
  TextB,
  TextItalic,
  TrashSimple,
} from '@phosphor-icons/react'

import { ContainerToolbar, Group, Menu, MoreOptions, TextArea } from './styles'

interface IProps {
  nameRegister: string
}

export function Toolbar({ nameRegister }: IProps) {
  const { register } = useFormContext()
  return (
    <ContainerToolbar>
      <Menu>
        <TextAa size={16} />
        <MoreOptions>
          <Group>
            <TextB size={16} />
            <TextItalic size={16} />
          </Group>
          <Group>
            <ListBullets size={16} />
            <ListNumbers size={16} />
          </Group>
          <Paperclip size={16} />
          <TrashSimple size={16} />
        </MoreOptions>
      </Menu>
      <TextArea
        placeholder="Digite uma descrição"
        {...register(nameRegister)}
        aria-label="Campo descrição"
      />
    </ContainerToolbar>
  )
}
