import ProductStyle from "../../../styles/Product.module.css"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import Image from "next/image"

import { faInfoCircle, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import QuantityInput from "../../../components/quantityinput"
import { imageUrl, rupiahFormater } from "../../../helpers/formatter"
import { DefaultLayout } from "../../../components/layouts"
import { addItem, clearMessage } from "../../../lib/slices/cartSlice"
import { useGetProductsByIdQuery } from "../../../lib/services/products.service"

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const { isLoading, error, data } = useGetProductsByIdQuery(id)
  
  const [itemAddedAlert, setItemAddedAlert] = useState(false)
  const [qty, setQty] = useState(1)

  const message = useSelector((state) => state.cart.value.message)
  const dispatch = useDispatch()
  
  useEffect(() => {
    setItemAddedAlert(message !== '')
  }, [message])
  
  const addToCart = () => {
    dispatch(addItem({id: data.data.id, price: data.data.price, qty: qty}))
  }

  return error ? (
    <div className="w-full h-screen p-10 flex justify-center items-center">Error happened</div>
  ) : isLoading ? (
    <div className="w-full h-screen p-10 flex justify-center items-center">...Loading</div>
  ) : data ? (
    <div className={`relative ${itemAddedAlert && 'h-screen overflow-y-hidden'}`}>
      <main>
        <div className="px-36 py-16 grid grid-cols-1 md:grid-cols-2">
          <div className="text-center space-y-5">
            <div className="bg-slate-200 px-5 py-10">
              <Image 
                alt={data.data.name}
                unoptimized
                src={imageUrl(data.data.image_url)}
                className="object-cover mx-auto h-auto"
                width={300}
                height={300}
              />
            </div>
            <h3 className="font-bold text-lg">{data.data.name}</h3>
            <p>🚚 GRATIS ONGKIR</p>
          </div>
          <div className="p-5 space-y-5">
            <h3 className="font-bold text-2xl">{data.data.name}</h3>
            <p className="text-green-600 font-bold text-lg">{rupiahFormater(data.data.price)}</p>
            <QuantityInput 
              count={qty} 
              increment={() => setQty(qty + 1)} 
              decrement={() => setQty(qty - 1)} 
            />
            <button 
              className="flex justify-between items-center bg-green-500 px-4 py-2 text-white"
              type="button"
              onClick={addToCart}
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
      {itemAddedAlert && (
        <div className={ProductStyle.dialog} onClick={() => {
          setItemAddedAlert(false)
          dispatch(clearMessage())
        }}>
          <div className={`${ProductStyle.card} flex items-center flex-col space-y-8`}>
            <div>
              <FontAwesomeIcon icon={faInfoCircle} size='1x' width={48} height={48} className='text-blue-600' />
            </div>
            <h3 className="font-bold">{message}</h3>
          </div>
        </div>
      )}
    </div>
  ) : null
}

ProductPage.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
