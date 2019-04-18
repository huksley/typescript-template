import * as dotenv from 'dotenv'

export const config = Object.assign(
  {
    NODE_ENV: 'development',
    LOG_LEVEL: 'info',
  },
  dotenv.config().parsed || {},
)
