import { type FormEvent, useState } from 'react'
import { Stack, FormControl, FormLabel, Input, FormHelperText, Button, Box } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'
import { api } from '~/utils/api'
import Answer from './_answer'
import ErrorAlert from './_error-alert'

export default function Form () {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [isError, setIsError] = useState(false)

  const apiRequest = api.bot.getAnswer.useMutation()

  const sendRequest = async () => {
    const response = await apiRequest.mutateAsync({ question })
    if (response.answer) {
      setAnswer(response.answer)
    } else {
      setIsError(true)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsError(false)
    sendRequest().catch(error => {
      console.error(error)
      setIsError(true)
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
    <Stack
      bg='gray.100'
      p={{
        base: 5,
        md: 10
      }}
      spacing={5}
    >
      <FormControl
        isRequired
      >
        <FormLabel>
          <FormattedMessage
            id='form.question.label'
          />
        </FormLabel>
        <Input
          bg='white'
          defaultValue={question}
          onChange={event => setQuestion(event.target.value)}
          autoComplete='off'
          isDisabled={apiRequest.isLoading}
          maxLength={100}
        />
        <FormHelperText>
          <FormattedMessage
            id='form.question.help'
          />
        </FormHelperText>
      </FormControl>
      {answer && <Answer answer={answer} />}
      {isError && <ErrorAlert />}
      <Box>
        <Button
          colorScheme='teal'
          type='submit'
          size='lg'
          isLoading={apiRequest.isLoading}
        >
          <FormattedMessage
            id='form.button.label'
          />
        </Button>
      </Box>
    </Stack>
    </form>
  )
}
