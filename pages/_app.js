import '../styles/globals.css'
import { Simonetta } from '@next/font/google'

const simonetta = Simonetta({
  weight: '400',
  subsets: ['latin']
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={simonetta.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
