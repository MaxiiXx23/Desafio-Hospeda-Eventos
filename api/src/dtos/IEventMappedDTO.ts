import { Privacy } from '@prisma/client'

export interface IEventMappedDTO {
  id: string
  name: string
  description: string
  dateInitial: string
  hourInitial: string
  privacy: Privacy
  address: {
    cep: string
    street: string
    number: number
    complement: string | null
    district: string
    city: string
    state: string
  }
}
