import { Heading } from '@chakra-ui/react'

export default function H3 ({ children }: JSX.IntrinsicElements['h3']) {
  return (
    <Heading
      as='h3'
      fontWeight='light'
      size='md'
      my={3}
    >
      {children}
    </Heading>
  )
}
