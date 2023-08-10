import { Link as ChakraLink } from '@chakra-ui/react'
import LinkExternal from './link-external'

export default function A (props: JSX.IntrinsicElements['a']) {
  const { href } = props
  if (href && (href.startsWith('#') || href.startsWith('/'))) {
    return (
      <ChakraLink
        {...props}
      />
    )
  }
  return (
    <LinkExternal
      {...props}
    >
      {props.children}
    </LinkExternal>
  )
}

