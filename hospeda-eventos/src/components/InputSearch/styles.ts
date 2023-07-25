import styled from 'styled-components'

export const ContainerInput = styled.div`
  width: 24rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  gap: 0.75rem;
  padding: 0.75rem;

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;

  svg {
    color: ${({ theme }) => theme.colors.title};
  }

  @media ${({ theme }) => theme.device.laptopS} {
    width: 20rem;
  }

  @media ${({ theme }) => theme.device.tabletL} {
    width: 18rem;
  }

  @media ${({ theme }) => theme.device.tabletM} {
    width: 16rem;
  }

  @media ${({ theme }) => theme.device.tabletS} {
    width: 100%;
  }
`

export const Input = styled.input`
  width: 100%;

  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.title};

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`
