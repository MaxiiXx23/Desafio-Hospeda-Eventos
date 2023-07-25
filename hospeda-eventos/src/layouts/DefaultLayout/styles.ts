import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
    height: 100%;
  }
`
