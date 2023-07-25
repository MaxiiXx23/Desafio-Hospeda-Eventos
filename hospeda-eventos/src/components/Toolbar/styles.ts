import styled from 'styled-components'

export const ContainerToolbar = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
`
export const Menu = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem;
  box-sizing: border-box;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  background-color: ${({ theme }) => theme.colors.body};
`
export const MoreOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 5.9375rem;
  font-size: ${({ theme }) => theme.fontSize.md};

  resize: none;

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  padding: 0.75rem;
  box-sizing: border-box;
`
