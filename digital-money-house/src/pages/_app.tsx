import type { AppProps } from 'next/app'
import { themes } from '@/assets/theme'
import { ThemeProvider } from 'styled-components'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.light}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
