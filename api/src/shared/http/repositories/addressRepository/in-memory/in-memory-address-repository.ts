import { Address, Prisma } from '@prisma/client'

import {
  IAddressRepository,
  IAddressUpdate,
  IResponseByQuery,
} from '../IAddressRepository'

// classe que será usada para futuros testes unitários.

export class InMemoryAddressRepository implements IAddressRepository {
  public items: Address[] = []

  async create(data: Prisma.AddressUncheckedCreateInput): Promise<Address> {
    throw new Error('Method not implemented.')
  }

  async update(data: IAddressUpdate): Promise<Address> {
    throw new Error('Method not implemented.')
  }

  async findByQuery(query: string, page: number): Promise<IResponseByQuery[]> {
    throw new Error('Method not implemented.')
  }

  async delete(id: string): Promise<Address | null> {
    throw new Error('Method not implemented.')
  }
}
