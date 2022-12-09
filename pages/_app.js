import '../styles/globals.css'
import { poppins } from '../helpers/fonts'
import { useState } from 'react'
import CartContext from '../lib/CartContext'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <CartContext.Provider
      value={{
        state: {cart},
        setCart
      }}
    >
      <main className={poppins.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </CartContext.Provider>
  )
}

export default MyApp
