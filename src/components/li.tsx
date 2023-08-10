import { ListItem, ListIcon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function Li ({ children }: JSX.IntrinsicElements['li']) {
  return (
    <ListItem>
      <ListIcon
        as={CheckCircleIcon}
        color='gray.300'
      />
      {children}
    </ListItem>
  )
}

