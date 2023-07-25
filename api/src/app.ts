import express from 'express'
import cors from 'cors'

import { env } from '@/env'
import { errorHandler } from './shared/http/errors/errorHandler'

import { apiRoutes } from './shared/http/routes/index.routes'

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: env.URL_WEB,
  }),
)
app.use(apiRoutes)

app.use(errorHandler)

app.get('/', (request, response) => {
  return response.status(200).send('Api is running!')
})

export { app }
