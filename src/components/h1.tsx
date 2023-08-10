import { Heading } from '@chakra-ui/react'

export default function H1 ({ children }: JSX.IntrinsicElements['h1']) {
  return (
    <Heading
      as='h1'
      fontWeight='light'
      size='xl'
      my={3}
    >
      {children}
    </Heading>
  )
}
