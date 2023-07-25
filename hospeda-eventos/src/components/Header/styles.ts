import styled from 'styled-components'

export const ContaienrHeader = styled.header`
  width: 100%;

  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Nav = styled.nav`
  width: 100%;
  height: 100%;

  padding-inline: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`
export const Image = styled.img``

export const WrapperInitials = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.primary};

  span {
    color: ${({ theme }) => theme.colors.white};
  }
`
