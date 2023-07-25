import { Privacy } from '@prisma/client'

export interface IEventTestDTO {
  id: string
  name: string
  description: string
  dateInitial: Date
  hourInitial: string
  privacy: Privacy
  addressId: string
  created_at: Date
  address: {
    id: string
    cep: string
    street: string
    number: number
    complement: string | null
    district: string
    city: string
    state: string
    created_at: Date
  }
}
