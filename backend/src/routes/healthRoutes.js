import { Router } from 'express'
import { sendSuccess } from '../utils/responseHandler.js'

const router = Router()

/**
 * @route   GET /api/health
 * @desc    System health check and diagnostic information
 * @access  Public
 */
router.get('/', (req, res) => {
  sendSuccess(res, {
    status: 'ONLINE',
    service: 'ProjectPulse API Engine',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || 'development'
  }, 'ProjectPulse API is fully operational')
})

export default router
