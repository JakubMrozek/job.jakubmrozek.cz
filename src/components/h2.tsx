import { Heading } from '@chakra-ui/react'

export default function H2 ({ children }: JSX.IntrinsicElements['h2']) {
  return (
    <Heading
      as='h2'
      fontWeight='light'
      size='lg'
      my={3}
    >
      {children}
    </Heading>
  )
}
