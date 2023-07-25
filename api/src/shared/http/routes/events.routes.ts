import { Router } from 'express'

import { getEventController } from '../controllers/events/getEvent/getEventController'
import { listEventsController } from '../controllers/events/list/listEventsController'
import { fetchEventsController } from '../controllers/events/fetch/fetchEventsController'

import { createEventController } from '../controllers/events/create/createEventController'
import { updateEventController } from '../controllers/events/update/updateEventController'
import { deleteEventController } from '../controllers/events/delete/deleteEventController'

const eventsRoutes = Router()

eventsRoutes.get('/get/:id', getEventController)
eventsRoutes.get('/list/:page', listEventsController)
eventsRoutes.get('/search/', fetchEventsController)

eventsRoutes.post('/create', createEventController)
eventsRoutes.put('/update/:id', updateEventController)
eventsRoutes.delete('/delete/:id', deleteEventController)

export { eventsRoutes }
