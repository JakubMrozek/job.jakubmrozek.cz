import { type AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { IntlProvider } from 'react-intl'
import { api } from '~/utils/api'
import { theme } from '~/utils/theme'

import cs from '../../locales/cs.json'
import en from '../../locales/en.json'

interface Props {
  Component: AppProps['Component'] & {
    isPublic: boolean,
    isErrorPage: boolean
  }
  pageProps: AppProps['pageProps']
}

function App ({ Component, pageProps }: Props) {
  const router = useRouter()
  const locale = router.locale ?? 'en'

  return (
    <IntlProvider
      locale={locale}
      messages={locale === 'en' ? en : cs}
    >
      <ChakraBaseProvider
        theme={theme}
      >
        <Component
          {...pageProps}
        />
      </ChakraBaseProvider>
    </IntlProvider>
  )
};

export default api.withTRPC(App)
