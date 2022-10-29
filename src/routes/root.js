import { Router } from 'express'

import logger from '../helpers/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.info('Inside the root path')
  const title = process.env.TITLE || 'SERVER'
  res.send({ msg: title })
})

export default router
