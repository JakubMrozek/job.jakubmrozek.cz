import { type LinkProps, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface Props extends LinkProps {
  children: React.ReactNode
}

export default function LinkExternal ({ children, ...props }: Props) {
  return (
    <Link
      isExternal
      {...props}
    >
      {children}
      <ExternalLinkIcon
        mx='2px'
      />
    </Link>
  )
}
