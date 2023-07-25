import styled from 'styled-components'

export const ContainerTr = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  th:first-child {
    width: 50%;
  }
  td:first-child {
    width: 50%;
  }
  border-bottom: 2px solid ${({ theme }) => theme.colors.body};
  padding: 0.75rem 1.5rem;

  @media ${({ theme }) => theme.device.tabletS} {
    th:first-child {
      width: 32%;
    }
    td:first-child {
      width: 32%;
    }
  }
`

export const TdTable = styled.td`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.tabletS} {
    width: 32%;
    justify-content: center;
    gap: 0.5rem;
  }
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  @media ${({ theme }) => theme.device.tabletS} {
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`

export const ImgResort = styled.img`
  width: 6.625rem;
  height: 5rem;

  border-radius: 12px;
`
export const ContainerInfos = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`

export const Name = styled.strong`
  color: ${({ theme }) => theme.colors.title};
`
export const WrapperInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media ${({ theme }) => theme.device.laptopS} {
    gap: 1rem;
  }

  @media ${({ theme }) => theme.device.tabletL} {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`

interface IPropsStatus {
  privacy: string
}

export const Status = styled.span<IPropsStatus>`
  padding: 0.5rem 1.1875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.title};

  background-color: ${({ theme, privacy }) =>
    privacy === 'PUBLIC'
      ? theme.colors.successLight
      : theme.colors.privateLight};
  border: 1px solid
    ${({ theme, privacy }) =>
      privacy === 'PUBLIC'
        ? theme.colors.successDark
        : theme.colors.privateDark};
  border-radius: 18px;

  @media ${({ theme }) => theme.device.tabletS} {
    padding: 0.5rem 0.5rem;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    padding: 0.25rem 0.5rem;
  }
`
