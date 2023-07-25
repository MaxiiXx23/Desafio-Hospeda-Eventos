import styled from 'styled-components'

export const ContainerTable = styled.table`
  width: 95%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${({ theme }) => theme.device.laptopS} {
    width: 100%;
  }
`
export const HeaderTable = styled.thead`
  width: 100%;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.spotlight};
  border: 1px solid ${({ theme }) => theme.colors.body};
`

export const TrTableHeader = styled.tr`
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

  @media ${({ theme }) => theme.device.tabletS} {
    th:first-child {
      width: 40%;
    }
    td:first-child {
      width: 40%;
    }
  }

  @media ${({ theme }) => theme.device.tabletS} {
    th:first-child {
      width: 32%;
    }
    td:first-child {
      width: 32%;
    }

    th:nth-child(1) {
      justify-content: flex-start;
    }
  }
`

export const ThTable = styled.th`
  color: ${({ theme }) => theme.colors.placeholder};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 25%;

  @media ${({ theme }) => theme.device.tabletS} {
    width: 32%;
    justify-content: center;
  }
`
export const Tbody = styled.tbody`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.75rem;
`
