import { Configuration, OpenAIApi } from 'openai'
import { env } from '~/env.mjs'
import systemMessage from './system-message'

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

export async function getApiResponse (question: string) {
  const chatCompletion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo-16k',
    messages: [
      {
        role: 'system',
        content: systemMessage
      },
      {
        role: 'user',
        content: 'How old are you?'
      },
      {
        role: 'system',
        content: 'I am 36 years old.'
      },
      {
        role: 'user',
        content: question
      },
    ]
  })
  return chatCompletion.data.choices[0]?.message?.content
}
