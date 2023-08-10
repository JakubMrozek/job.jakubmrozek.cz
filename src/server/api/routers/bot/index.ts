import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { getApiResponse } from './request'

const schema = z.object({
  question: z.string().max(100)
})

export const botRouter = createTRPCRouter({
  getAnswer: publicProcedure
    .input(schema)
    .mutation(async ({ input: { question }, ctx }) => {
      const answer = await getApiResponse(question)
      if (!answer) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Unable to get a response. Please try again in a moment.',
        })
      }
      await ctx.prisma.question.create({
        data: {
          question,
          answer,
        }
      })
      return {
        answer
      }
    })
})
