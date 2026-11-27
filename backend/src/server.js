import express from 'express'
import cors from 'cors'
import { config } from './config/env.js'
import apiRoutes from './routes/index.js'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js'

const app = express()

// Global Middleware
app.use(cors({
  origin: config.clientUrl,
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Mount Centralized API Routes
app.use('/api', apiRoutes)

// 404 Route Catch-all
app.use(notFoundHandler)

// Centralized Error Handling Middleware
app.use(errorHandler)

// Server Listen
const server = app.listen(config.port, () => {
  console.log(`[ProjectPulse API] Server listening on port ${config.port} in ${config.nodeEnv} mode`)
})

export default server
