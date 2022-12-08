import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import Footer from "../../../components/footer"
import Headers from "../../../components/header"
import QuantityInput from "../../../components/quantityinput"

import { products } from '../../../helpers/dummy'
import { rupiahFormater } from "../../../helpers/formatter"

import CartContext from "../../../lib/CartContext"

function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const product = products.filter(item => item.id == id)[0]
  const value = useContext(CartContext)
  const [qty, setQty] = useState(1)

  return (
    <>
      <Headers />
      <main>
        <div className="px-36 py-16 grid grid-cols-1 md:grid-cols-2">
          <div className="text-center space-y-5">
            <div className="bg-slate-200 px-5 py-10">
              <Image alt={product.title} src={product.img} className="object-cover mx-auto" />
            </div>
            <h3 className="font-bold text-lg">{product.title}</h3>
            <p>🚚 GRATIS ONGKIR</p>
          </div>
          <div className="p-5 space-y-5">
            <h3 className="font-bold text-2xl">{product.title}</h3>
            <p className="text-green-600 font-bold text-lg">{rupiahFormater(product.price)}</p>
            <QuantityInput count={qty} setCount={setQty} />
            <button 
              className="flex justify-between items-center bg-green-500 px-4 py-2 text-white"
              type="button"
              onClick={() => {
                const currentCart = value.state.cart
                value.setCart([
                  ...currentCart,
                  {
                    product_id: product.id,
                    qty
                  }
                ])
              }}
            >
                <FontAwesomeIcon icon={faShoppingCart} width={24} height={24} /> + Add to Cart
            </button>
            <div className="border border-dotted p-5">
              <dl className="grid grid-cols-1 md:grid-cols-2">
                <dd>Kondisi</dd>
                <dt>Baru</dt>
                
                <dd>Spesifikasi</dd>
                <dt>Material Woven Clothing- Base Anti slip rubber- Speed type- Tebal 3mm (Tidak ada 4mm)- Pinggiran Jahit</dt>

                <dd>Dimensi</dd>
                <dt>700 X 300 X 3mm</dt>

                <dd>Berat</dd>
                <dt>1kg</dt>
              </dl>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProductPage
