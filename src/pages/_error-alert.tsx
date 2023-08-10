import { Alert, AlertIcon } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'

export default function ErrorAlert () {
  return (
    <Alert
      status='error'
    >
      <AlertIcon />
      <FormattedMessage
        id='error'
      />
    </Alert>
  )
}
