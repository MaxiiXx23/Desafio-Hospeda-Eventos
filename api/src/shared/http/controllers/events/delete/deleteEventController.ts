import { Request, Response, NextFunction } from 'express'

import { z } from 'zod'

import { makeDeleteEventUseCase } from '@/useCases/events/delete/factories/makeDeleteEventUseCase'

import { EventNotFoundError } from '@/shared/http/errors/EventNotFoundError'
import { EventNotDeletedError } from '@/useCases/events/delete/errors/EventNotDeletedError'

export async function deleteEventController(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const schemaParams = z.object({
    id: z.string().uuid(),
  })

  try {
    const { id } = schemaParams.parse(request.params)

    const deleteEventUsecase = makeDeleteEventUseCase()

    const { event, hasDelete } = await deleteEventUsecase.execute({ id })

    const itemDeleted = {
      event,
      hasDelete,
    }

    return response.status(200).json({ itemDeleted })
  } catch (err) {
    if (err instanceof EventNotFoundError) {
      return response.status(404).json({ error: err.message })
    } else if (err instanceof EventNotDeletedError) {
      return response.status(405).json({ error: err.message })
    }

    response.status(500)
    return next(err)
  }
}
