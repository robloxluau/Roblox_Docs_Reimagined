import type { ReactElement } from 'react'
import type { AppProps } from 'next/app'

import './css/style.css'

export default function Nextra({
  Component,
  pageProps
}: AppProps): ReactElement {
  return <Component {...pageProps} />
}