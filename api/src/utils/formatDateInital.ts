import '@/config/dayjsConfig'

import dayjs from 'dayjs'

export function formatDateInitial(dateInitial: string) {
  const dateFormatted = dayjs(dateInitial).format('DD/MM/YYYY')

  return dateFormatted
}
