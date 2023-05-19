import type { AppProps } from 'next/app'
import { themes } from '@/assets/theme'
import { ThemeProvider } from 'styled-components'
import '@/styles/globals.css'
import Layout from '@/components/layouts/Layout'
import ToastProvider from '@/components/ToastProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.light}>
      <Layout>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </Layout>
    </ThemeProvider>
  )
}
