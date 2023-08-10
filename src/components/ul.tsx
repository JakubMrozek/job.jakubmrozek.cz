import { List } from '@chakra-ui/react'

export default function Ul ({ children }: JSX.IntrinsicElements['ul']) {
  return (
    <List
      spacing={3}
      ml={3}
      mb={3}
    >
      {children}
    </List>
  )
}
