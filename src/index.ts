import * as winston from 'winston'
import * as dotenv from 'dotenv'
const config = dotenv.config().parsed || {}

winston.configure({
  level: config.LOG_LEVEL || 'debug',
  transports: [new winston.transports.Console({})],
})

winston.info('Starting')
