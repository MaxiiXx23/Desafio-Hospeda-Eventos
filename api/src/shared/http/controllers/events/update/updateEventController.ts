import { Request, Response, NextFunction } from 'express'

import { z } from 'zod'

import { makeUpdateEventUseCase } from '@/useCases/events/update/factories/makeUpdateEventUseCase'

import { EventNotFoundError } from '@/shared/http/errors/EventNotFoundError'
import { DateIsInvalidError } from '@/shared/http/errors/DateIsInvalidError'

export async function updateEventController(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const schemaParams = z.object({
    id: z.string().uuid(),
  })
  const schemaBody = z.object({
    name: z.string().max(60, 'Name must have maximus 60 caracteres.'),
    description: z
      .string()
      .max(800, 'Description must have maximus 800 caracteres.'),
    privacy: z.boolean(),
    cep: z
      .string()
      .min(8, 'CEP must have minimal 8 numbers.')
      .max(8, 'CEP must have maximus 8 numbers.'),
    street: z.string().max(60, 'Street must have maximus 60 caracteres.'),
    number: z.coerce.number().int().min(0, 'Number must to have be integer.'),
    complement: z
      .string()
      .max(80, 'Complement must have maximus 80 caracteres.'),
    district: z.string().max(60, 'District must have maximus 60 caracteres.'),
    city: z.string().max(60, 'City must have maximus 60 caracteres.'),
    state: z
      .string()
      .trim()
      .toUpperCase()
      .min(2, 'State must have minimal 2 caracteres.')
      .max(2, 'State must have maximus 2 caracteres.'),
    dateInitial: z.string().regex(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/),
    hourInitial: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/),
  })

  try {
    const { id } = schemaParams.parse(request.params)

    const {
      name,
      privacy,
      description,
      dateInitial,
      hourInitial,
      cep,
      street,
      number,
      complement,
      district,
      city,
      state,
    } = schemaBody.parse(request.body)

    const updateEventUseCase = makeUpdateEventUseCase()

    const { eventUpdated } = await updateEventUseCase.execute({
      id,
      name,
      privacy,
      description,
      dateInitial,
      hourInitial,
      cep,
      street,
      number,
      complement,
      district,
      city,
      state,
    })

    return response.status(202).json({ eventUpdated })
  } catch (err) {
    if (err instanceof EventNotFoundError) {
      return response.status(404).json({ error: err.message })
    } else if (err instanceof DateIsInvalidError) {
      return response.status(400).json({ error: err.message })
    }

    response.status(500)
    return next(err)
  }
}
