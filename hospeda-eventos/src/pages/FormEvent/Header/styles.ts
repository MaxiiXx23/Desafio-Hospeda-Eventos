import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const BackNav = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  text-decoration: none;

  svg {
    color: ${({ theme }) => theme.colors.title};
  }

  strong {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    color: ${({ theme }) => theme.colors.title};

    @media ${({ theme }) => theme.device.mobileL} {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }

    @media ${({ theme }) => theme.device.mobileM} {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }
`
export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  strong {
    color: ${({ theme }) => theme.colors.primary};

    @media ${({ theme }) => theme.device.mobileL} {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
`
