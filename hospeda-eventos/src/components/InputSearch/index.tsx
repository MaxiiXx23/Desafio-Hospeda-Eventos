import { MagnifyingGlass } from '@phosphor-icons/react'

import { ContainerInput, Input } from './styles'
import { HTMLAttributes } from 'react'

interface IProps extends HTMLAttributes<HTMLInputElement> {
  placeholderText: string
}

export function InputSearch({ placeholderText, ...rest }: IProps) {
  return (
    <ContainerInput>
      <MagnifyingGlass size={20} />
      <Input type="text" placeholder={placeholderText} {...rest} />
    </ContainerInput>
  )
}
