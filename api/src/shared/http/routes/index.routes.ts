import { Router } from 'express'
import { eventsRoutes } from './events.routes'

const apiRoutes = Router()

apiRoutes.use('/events', eventsRoutes)

export { apiRoutes }
