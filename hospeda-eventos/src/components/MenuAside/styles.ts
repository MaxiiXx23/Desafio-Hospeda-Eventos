import styled from 'styled-components'

export const ContainerAside = styled.aside`
  width: 3.5rem;

  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding-top: 1.5rem;

  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
    height: 3.5rem;
    padding-top: 0rem;
  }
`

export const NavAside = styled.ul`
  height: 18rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  list-style-type: none;

  gap: 2rem;

  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: row;
    height: 100%;
  }
`
