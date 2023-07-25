import styled from 'styled-components'

export const ContainerBtn = styled.button`
  cursor: pointer;
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
`
