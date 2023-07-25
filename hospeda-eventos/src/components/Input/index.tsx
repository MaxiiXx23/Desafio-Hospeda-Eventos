import { HTMLAttributes } from 'react'

import { useFormContext } from 'react-hook-form'

import { ContainerInput, Label } from './styles'

interface IProps extends HTMLAttributes<HTMLInputElement> {
  labelText: string
  nameRegister: string
}

export function Input({ labelText, nameRegister, ...rest }: IProps) {
  const { register } = useFormContext()
  return (
    <Label>
      <span>{labelText}</span>
      <ContainerInput {...register(nameRegister)} {...rest} />
    </Label>
  )
}
