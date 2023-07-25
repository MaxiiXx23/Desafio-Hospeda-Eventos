import dayjs from 'dayjs'

export function formatDate(dateInitial: string) {
  const [day, month, year] = dateInitial.split('/')

  const dateFormatted = dayjs(`${year}-${month}-${day}`).toDate()

  return dateFormatted
}
