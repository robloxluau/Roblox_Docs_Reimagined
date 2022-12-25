import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Roblox Docs Reimagined</span>,

  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',

  toc: { float: true },
  search: { loading: 'Tring to look...', placeholder: 'Search: Luau is the best 😎' },

  project: { link: 'https://github.com/shuding/nextra-docs-template', },
  footer: { text: 'Roblox Luau Docs Reimagined | under the MIT license', },
}

export default config
