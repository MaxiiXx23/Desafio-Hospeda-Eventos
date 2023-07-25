import styled from 'styled-components'
import * as Switch from '@radix-ui/react-switch'

export const SwitchRoot = styled(Switch.Root)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 11.8125rem;
  height: 2.375rem;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 9999px;
  position: relative;
`

export const Thumb = styled(Switch.Thumb)`
  position: absolute;
  width: 5.90625rem;
  padding: 0.5rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 9999px;

  color: ${({ theme }) => theme.colors.white};

  transition: transform 100ms;
  transform: translateX(-2rem);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(2rem);
  }
`
export const ThumbFake = styled.span`
  display: block;
  width: 5.90625rem;
`
export const ContainerTextInputDescription = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
`
