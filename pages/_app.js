import '../styles/globals.css'
import { poppins } from '../helpers/fonts'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
