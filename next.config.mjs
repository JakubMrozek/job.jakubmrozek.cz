import './src/env.mjs'
import mdx from '@next/mdx'

/** @type {import("next").NextConfig} */
const config = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'cs'],
    defaultLocale: 'en'
  }
}

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react'
  }
})

export default withMDX(config)
