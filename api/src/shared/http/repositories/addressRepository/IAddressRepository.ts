import { Address, Prisma } from '@prisma/client'

export interface IAddressUpdate {
  id: string
  cep: string
  street: string
  number: number
  complement: string
  district: string
  city: string
  state: string
}

export interface IResponseByQuery {
  eventId: string
}

export interface IAddressRepository {
  create(data: Prisma.AddressUncheckedCreateInput): Promise<Address>
  update(data: IAddressUpdate): Promise<Address>
  // findById(id: string): Promise<Address | null>
  findByQuery(query: string, page: number): Promise<IResponseByQuery[]>
  delete(id: string): Promise<Address | null>
}
