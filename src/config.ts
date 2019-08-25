import * as dotenv from 'dotenv'

export const config = Object.assign(
  {
    NODE_ENV: 'development' as 'development' | 'product',
    LOG_LEVEL: 'info' as 'info' | 'debug' | 'warn' | 'error',
  },
  dotenv.config().parsed || {},
)
