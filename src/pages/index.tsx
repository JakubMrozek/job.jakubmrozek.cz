import Head from 'next/head'
import { useRouter } from 'next/router'
import { Stack } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'

import H1 from '~/components/h1'
import H2 from '~/components/h2'
import H3 from '~/components/h3'
import H4 from '~/components/h4'
import A from '~/components/a'
import Hr from '~/components/hr'
import Ul from '~/components/ul'
import Li from '~/components/li'

import ContentCs from './_content-cs.mdx'
import ContentEn from './_content-en.mdx'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  a: A,
  ul: Ul,
  li: Li,
  hr: Hr,
}

export default function HomePage () {
  const router = useRouter()
  const locale = router.locale ?? 'en'

  return (
    <>
      <Head>
        <title>#OpenToWork</title>
      </Head>
      <Stack
        as='main'
        p={{
          base: 5,
          md: 10
        }}
      >
        <MDXProvider
          components={components}
        >
          {locale === 'en' ? <ContentEn /> : <ContentCs />}
        </MDXProvider>
      </Stack>
    </>
  )
}
