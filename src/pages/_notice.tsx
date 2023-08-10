import { Box } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

export default function Notice ({ children }: Props) {
  return (
    <Box
      fontStyle='italic'
      bg='gray.100'
      p={5}
      my={3}
    >
      {children}
    </Box>
  )
}
