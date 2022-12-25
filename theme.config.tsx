import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Roblox Docs Reimagined</span>,

  useNextSeoProps() {
    return { titleTemplate: '%s - Roblox Docs Reimagined' }
  },

  head: ( <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="Roblox Docs Reimagined" />
    <meta property="og:description" content="Roblox Documents in depth" />
  </>),

  toc: { float: true },
  search: { loading: 'Tring to look...', placeholder: 'Search: Luau is the best 😎' },

  footer: { text: 'Roblox Luau Docs Reimagined | under the MIT license', },
}

export default config
