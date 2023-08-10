import { Heading } from '@chakra-ui/react'

export default function H4 ({ children }: JSX.IntrinsicElements['h3']) {
  return (
    <Heading
      as='h4'
      size='sm'
      my={3}
    >
      {children}
    </Heading>
  )
}
