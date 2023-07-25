import styled from 'styled-components'

export const ContainerForm = styled.form`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  padding-bottom: 3rem;
`
export const ContainerInputs = styled.div`
  width: 100%;

  padding: 3rem 3rem 2rem 3rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2.875rem;
  box-sizing: border-box;

  border-bottom: 1px solid ${({ theme }) => theme.colors.body};

  @media ${({ theme }) => theme.device.tabletS} {
    padding: 1rem 1rem 2rem 1rem;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    padding: 0.75rem 0.75rem 2rem 0.75rem;
  }
`
export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSize.lg};
`
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

const GridBase = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  column-gap: 1rem;
  row-gap: 1rem;

  box-sizing: border-box;
`

export const ContainerLabelsGrid = styled(GridBase)`
  label:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    label {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`
export const ContainerLabels = styled(GridBase)`
  label {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`
export const WrapperBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
