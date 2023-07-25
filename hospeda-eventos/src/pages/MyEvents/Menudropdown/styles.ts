import styled from 'styled-components'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { NavLink } from 'react-router-dom'

export const Root = styled(DropdownMenu.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const BtnDropdown = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  background-color: transparent;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

export const Content = styled(DropdownMenu.Content)`
  width: 7.0625rem;
  height: 5.0625rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.16);

  padding: 0.5rem;
  border-radius: 8px;
`

export const Item = styled(DropdownMenu.Item)``

export const BtnNavLink = styled(NavLink)`
  cursor: pointer;

  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSize.sm};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  text-decoration: none;
`

export const Btn = styled.button`
  cursor: pointer;

  color: ${({ theme }) => theme.colors.destructive};
  font-size: ${({ theme }) => theme.fontSize.sm};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: transparent;
`
