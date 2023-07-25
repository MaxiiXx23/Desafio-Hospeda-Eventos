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
  box-sizing: border-box;
`

export const ContainerInput = styled.div`
  width: 100%;
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
  box-sizing: border-box;
`

export const Input = styled.input`
  width: 100%;

  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.title};

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`
