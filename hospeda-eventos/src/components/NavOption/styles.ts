import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

interface IPropsNavContainer {
  isfocus: boolean
}

export const NavContainer = styled(NavLink)<IPropsNavContainer>`
  display: flex;
  align-items: center;
  align-items: center;

  padding: 0.5rem;

  background-color: ${({ theme, isfocus }) =>
    isfocus ? theme.colors.primary : theme.colors.white};
  border-radius: 10px;

  text-decoration: none;

  transition: 0.3s;

  svg {
    color: ${({ theme, isfocus }) =>
      isfocus ? theme.colors.white : theme.colors.base};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
