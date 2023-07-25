import '@/config/dayjsConfig'

import dayjs from 'dayjs'

export function formatDateEvent(dateInitial: string) {
  const datePtBR = dayjs(dateInitial).format('DD/MMMM/YYYY')

  const [day, month, year] = datePtBR.split('/')

  const dateFormatted = `${day} ${month} ${year}`

  return dateFormatted
}
