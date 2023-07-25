import styled from 'styled-components'

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`

export const ContainerInput = styled.input`
  width: 100%;
  padding: 0.75rem;

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;

  font-size: ${({ theme }) => theme.fontSize.md};

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
  box-sizing: border-box;
`
