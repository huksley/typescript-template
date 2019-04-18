import { logger } from './logger'
import { config } from './config'

logger.info(`Starting, env ${config.NODE_ENV} log ${config.LOG_LEVEL}`)
