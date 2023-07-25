import {
  House,
  CalendarBlank,
  CurrencyDollar,
  ChartPie,
  Tag,
} from '@phosphor-icons/react'

import { NavContainer } from './styles'

type icon = 'House' | 'CalendarBlank' | 'CurrencyDollar' | 'ChartPie' | 'Tag'

interface IProps {
  to: string
  icon: icon
  pathRoute: string
}

const icons = {
  House: <House size={24} />,
  CalendarBlank: <CalendarBlank size={24} />,
  CurrencyDollar: <CurrencyDollar size={24} />,
  ChartPie: <ChartPie size={24} />,
  Tag: <Tag size={24} />,
}

export function NavOption({ to, pathRoute, icon }: IProps) {
  const isFocus = to === pathRoute

  return (
    <NavContainer to={to} isfocus={isFocus}>
      {icons[icon]}
    </NavContainer>
  )
}
