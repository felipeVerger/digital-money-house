import type { AppProps } from 'next/app'
import { themes } from '@/assets/theme'
import { ThemeProvider } from 'styled-components'
import '@/styles/globals.css'
import Layout from '@/components/layouts/Layout'
import { Provider } from 'react-redux'
import store from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.light}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}
