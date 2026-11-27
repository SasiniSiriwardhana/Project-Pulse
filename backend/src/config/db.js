import { PrismaClient } from '@prisma/client'

// Instantiate PrismaClient with connection logging
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error']
})

export default prisma
