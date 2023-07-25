import { BtnNavLink } from './styles'

interface IProps {
  to: string
  ariaLabel: string
  textBtn: string
}

export function ButtonLink({ to, textBtn, ariaLabel }: IProps) {
  return (
    <BtnNavLink to={to} aria-label={ariaLabel}>
      {textBtn}
    </BtnNavLink>
  )
}
