import { EventNotFoundError } from '@/shared/http/errors/EventNotFoundError'
import { makeGetEventUseCase } from '@/useCases/events/getEvent/factories/makeGetEventUseCase'
import { Request, Response, NextFunction } from 'express'

import { z } from 'zod'

export async function getEventController(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const schemaParams = z.object({
    id: z.string().uuid(),
  })

  try {
    const { id } = schemaParams.parse(request.params)

    const getEventUseCase = makeGetEventUseCase()

    const { event } = await getEventUseCase.execute({ id })

    return response.status(200).json({
      event,
    })
  } catch (err) {
    if (err instanceof EventNotFoundError) {
      return response.status(400).json({ error: err.message })
    }

    response.status(500)
    return next(err)
  }
}
