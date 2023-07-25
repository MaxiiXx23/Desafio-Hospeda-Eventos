import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import { SwitchRoot, Thumb, ThumbFake } from './styles'

interface IProps {
  textThumb: string
  checked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export function Switch({ textThumb, checked, setChecked }: IProps) {
  const { setValue } = useFormContext()

  useEffect(() => {
    setValue('privacy', checked)
  }, [checked, setValue])
  return (
    <SwitchRoot checked={checked} onCheckedChange={setChecked}>
      <ThumbFake>Público</ThumbFake>
      <Thumb>{textThumb}</Thumb>
      <ThumbFake>Privado</ThumbFake>
    </SwitchRoot>
  )
}
