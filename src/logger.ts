import * as winston from 'winston'
import { config } from './config'

winston.configure({
  level: config.LOG_LEVEL || 'debug',
  transports: [new winston.transports.Console({})],
})

export const logger = winston
