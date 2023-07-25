import '@/config/dayjsConfig'

import dayjs from 'dayjs'

export function compareDateEvent(dateResquet: Date, dateToCompare: Date) {
  const differentBetweenDates = dayjs(dateResquet).diff(dateToCompare, 'days')

  return differentBetweenDates
}
