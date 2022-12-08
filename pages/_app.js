import '../styles/globals.css'
import { poppins } from '../helpers/fonts'
import { useState } from 'react'
import CartContext from '../lib/CartContext'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <main className={poppins.className}>
      <CartContext.Provider
        value={{
          state: {cart},
          setCart
        }}
      >
        <Component {...pageProps} />
      </CartContext.Provider>
    </main>
  )
}

export default MyApp
