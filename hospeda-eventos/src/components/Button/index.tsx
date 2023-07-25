import { ButtonHTMLAttributes } from 'react'

import { ContainerBtn } from './styles'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textBtn: string
}

export function Button({ textBtn, ...rest }: IProps) {
  return <ContainerBtn {...rest}>{textBtn}</ContainerBtn>
}
