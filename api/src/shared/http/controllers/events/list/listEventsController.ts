import { PaginationIsInvalidError } from '@/useCases/events/list/errors/PaginationIsInvalidError'
import { makeListEventUseCase } from '@/useCases/events/list/factories/makeListEventUseCase'
import { Request, Response, NextFunction } from 'express'

import { z } from 'zod'

export async function listEventsController(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const schemaParams = z.object({
    page: z.coerce.number().default(1),
  })

  try {
    const { page } = schemaParams.parse(request.params)

    const listEventsUseCase = makeListEventUseCase()

    const { events } = await listEventsUseCase.execute({ page })

    return response.status(200).json({ events })
  } catch (err) {
    if (err instanceof PaginationIsInvalidError) {
      return response.status(400).json({ error: err.message })
    }
    response.status(500)
    return next(err)
  }
}
