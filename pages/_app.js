import '../styles/globals.css'
import { poppins } from '../helpers/fonts'
import { Provider } from 'react-redux'
import { store } from '../lib/store'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <Provider store={store}>
      <main className={poppins.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </Provider>
  )
}

export default MyApp
