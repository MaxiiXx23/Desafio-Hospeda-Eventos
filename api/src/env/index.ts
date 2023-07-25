import 'dotenv/config'

import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),

  JWT_SECRET_KEY: z.string(),
  EXPIRES_IN_TOKEN: z.string(),
  EXPIRES_IN_REFRESH_TOKEN: z.string(),
  URL_WEB: z.string(),
  DATABASE_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  throw new Error('Invalid environment variables.')
}

export const env = _env.data
