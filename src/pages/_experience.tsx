import { Heading, Stack, chakra, Box } from '@chakra-ui/react'
import Image from 'next/image'
import LinkExternal from '../components/link-external'

interface Props {
  company?: string
  link?: string
  logo: string
  position: string
  from: number
  to: number
  children: React.ReactNode
}

export default function Experience ({ logo, link, company, position, from, to, children }: Props) {
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      spacing={5}
      ml={3}
      my={3}
    >
      <Box>
        <Image
          src={logo}
          width={100}
          height={100}
          alt={`Logo ${logo}`}
        />
      </Box>
      <Stack
        flex={1}
      >
        <Heading
          as='h4'
          size='sm'
        >
          {link && <LinkExternal
            href={link}
          >
            {company}
          </LinkExternal>}
          {' '}
          <chakra.span
            color='gray.500'
            fontWeight='normal'
          >
            {position}
            {' '}
            ({from} - {to})
          </chakra.span>
        </Heading>
        <Box>
          {children}
        </Box>
      </Stack>
    </Stack>
  )
}
