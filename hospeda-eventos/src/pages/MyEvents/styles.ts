import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 2rem 5.5625rem;

  @media ${({ theme }) => theme.device.laptopS} {
    padding: 2rem 2rem;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    padding-top: 1rem;
  }
`
export const ContainerSection = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.5rem;
`
export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 1.5rem;
`
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: bold;

  color: ${({ theme }) => theme.colors.title};
`
export const WrapperInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.tabletS} {
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
  }
`
