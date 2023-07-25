import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.body};
`
export const ContainerSection = styled.main`
  width: 56.625rem;

  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.5rem;

  @media ${({ theme }) => theme.device.laptopS} {
    width: 50rem;
    margin-top: 4rem;
  }

  @media ${({ theme }) => theme.device.tabletL} {
    width: 44rem;
    margin-top: 4rem;
  }

  @media ${({ theme }) => theme.device.tabletM} {
    width: 38rem;
    margin-top: 3.5rem;
  }

  @media ${({ theme }) => theme.device.tabletS} {
    width: 34rem;
    margin-top: 3rem;
  }

  @media ${({ theme }) => theme.device.tabletS} {
    width: 30rem;
    margin-top: 3rem;
  }
`
