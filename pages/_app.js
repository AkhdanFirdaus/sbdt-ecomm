import '../styles/globals.css'
import { poppins } from '../helpers/fonts'

function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
