import { HTMLAttributes } from 'react'

import { CalendarBlank } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'

import { ContainerInput, Input, Label } from './styles'

interface IProps extends HTMLAttributes<HTMLInputElement> {
  labelText: string
  nameRegister: string
}

export function InputIcon({ labelText, nameRegister, ...rest }: IProps) {
  const { register } = useFormContext()
  return (
    <Label>
      <span>{labelText}</span>
      <ContainerInput>
        <CalendarBlank size={16} />
        <Input {...register(nameRegister)} {...rest} />
      </ContainerInput>
    </Label>
  )
}
