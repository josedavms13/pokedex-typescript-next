import '../styles/reset-settings.css'
import '../styles/pokemonList/headerBar.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {store} from '../state'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
export default MyApp
