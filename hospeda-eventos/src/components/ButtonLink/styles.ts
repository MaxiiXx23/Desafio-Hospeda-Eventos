import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const BtnNavLink = styled(NavLink)`
  padding: 0.78125rem 4.21875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 32px;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 0.9;
  }

  @media ${({ theme }) => theme.device.laptopS} {
    padding: 0.78125rem 4rem;
  }

  @media ${({ theme }) => theme.device.tabletL} {
    padding: 0.78125rem 3.5rem;
  }

  @media ${({ theme }) => theme.device.tabletM} {
    padding: 0.78125rem 3rem;
  }

  @media ${({ theme }) => theme.device.tabletS} {
    padding: 0.78125rem 1.5rem;
  }
`
