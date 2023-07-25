import { ContainerAside, NavAside } from './styles'
import { NavOption } from '../NavOption'
import { useLocation } from 'react-router-dom'

export function MenuAside() {
  const pathRoute = useLocation()

  return (
    <ContainerAside>
      <NavAside>
        <li>
          <NavOption pathRoute={pathRoute.pathname} to="#" icon="House" />
        </li>
        <li>
          <NavOption
            pathRoute={pathRoute.pathname}
            to="/"
            icon="CalendarBlank"
          />
        </li>
        <li>
          <NavOption
            pathRoute={pathRoute.pathname}
            to="#"
            icon="CurrencyDollar"
          />
        </li>
        <li>
          <NavOption pathRoute={pathRoute.pathname} to="#" icon="ChartPie" />
        </li>
        <li>
          <NavOption pathRoute={pathRoute.pathname} to="#" icon="Tag" />
        </li>
      </NavAside>
    </ContainerAside>
  )
}
