import { createTRPCRouter } from'~/server/api/trpc'
import { botRouter } from '~/server/api/routers/bot'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  bot: botRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
