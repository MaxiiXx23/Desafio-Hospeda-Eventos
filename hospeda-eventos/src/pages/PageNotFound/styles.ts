import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.body};
`
export const ContainerSection = styled.section`
  width: 50%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  text-align: center;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 16px;

  padding: 1rem;
`
