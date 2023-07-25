import dayjs from 'dayjs'

export function returnDateInitial(dateInitial: string) {
  const [day, month, year] = dateInitial.split('/')

  const dateInital = dayjs(`${year}-${month}-${day}`)
  const dateCurrent = dayjs(new Date())

  let dateInitialFormatted

  const diffBetweenDays = dateCurrent.diff(dateInital, 'day')

  if (diffBetweenDays <= 0) {
    dateInitialFormatted = dateInital.toDate()

    return dateInitialFormatted
  }

  return null
}
