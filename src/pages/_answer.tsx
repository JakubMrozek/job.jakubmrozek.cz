import { FormLabel, Box, Text } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'

interface Props {
  answer: string
}

export default function Answer ({ answer }: Props) {
  return (
    <>
      <Box
        bg='yellow.100'
        p={5}
      >
        <FormLabel>
          <FormattedMessage
            id='form.answer.label'
          />
        </FormLabel>
        <Text>
          {answer}
        </Text>
      </Box>
      <Text
        fontSize='xs'
        color='gray.500'
        fontStyle='italic'
      >
        <FormattedMessage
          id='form.answer.note'
        />
      </Text>
    </>
  )
}
