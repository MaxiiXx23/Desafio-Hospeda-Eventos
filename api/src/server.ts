import { app } from './app'
import { env } from '@/env'

app.listen(env.PORT, () => {
  console.log(`API RESTful is ruinning on port:${env.PORT}`)
})
