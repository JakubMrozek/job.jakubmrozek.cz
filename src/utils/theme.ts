import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        color: 'teal.500',
        textDecoration: 'underline',
        _hover: {
          textDecoration: 'none',
          color: 'teal.700'
        }
      }
    }
  }
})
