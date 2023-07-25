import { Address, Prisma } from '@prisma/client'

import {
  IAddressRepository,
  IAddressUpdate,
  IResponseByQuery,
} from '../IAddressRepository'
import { prismaConnection } from '@/lib/prisma/prismaConnection'

export class PrismaAddressRepository implements IAddressRepository {
  async findByQuery(query: string, page: number): Promise<IResponseByQuery[]> {
    const take = 10
    const skip = (page - 1) * take

    const address = await prismaConnection.address.findMany({
      where: {
        OR: [
          {
            state: {
              contains: query,
            },
          },
          {
            city: {
              contains: query,
            },
          },
        ],
      },
      select: {
        eventId: true,
      },
      take,
      skip,
    })

    return address
  }

  async create({
    cep,
    street,
    number,
    complement,
    district,
    city,
    state,
    eventId,
  }: Prisma.AddressUncheckedCreateInput): Promise<Address> {
    const address = await prismaConnection.address.create({
      data: {
        cep,
        street,
        number,
        complement,
        district,
        city,
        state,
        eventId,
      },
    })
    return address
  }

  async update({
    id,
    cep,
    street,
    number,
    complement,
    district,
    city,
    state,
  }: IAddressUpdate): Promise<Address> {
    const addressUpdated = await prismaConnection.address.update({
      where: {
        id,
      },
      data: {
        cep,
        street,
        number,
        complement,
        district,
        city,
        state,
      },
    })

    return addressUpdated
  }

  async delete(id: string): Promise<Address | null> {
    const addressDeleted = await prismaConnection.address.delete({
      where: {
        id,
      },
    })

    if (!addressDeleted) {
      return null
    }
    return addressDeleted
  }
}
