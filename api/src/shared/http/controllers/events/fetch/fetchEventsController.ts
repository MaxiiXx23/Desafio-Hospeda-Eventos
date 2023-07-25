import { makeFetchByQuery } from '@/useCases/events/fetch/factories/makeFetchByQuery'
import { Request, Response, NextFunction } from 'express'

import { z } from 'zod'

export async function fetchEventsController(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const schemaQuery = z.object({
    query: z.string(),
    page: z.coerce.number().default(1),
  })

  try {
    const { query, page } = schemaQuery.parse(request.query)

    const fetchByQueryUseCase = makeFetchByQuery()

    const { events } = await fetchByQueryUseCase.execute({ query, page })

    return response.status(200).json({ events })
  } catch (err) {
    response.status(500)
    return next(err)
  }
}
