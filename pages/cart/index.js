import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";
import Headers from "../../components/header";
import QuantityInput from "../../components/quantityinput";

import { useSelector, useDispatch } from "react-redux"
import { imageUrl, rupiahFormater } from "../../helpers/formatter";
import { decrementQty, incrementQty, removeItem,  } from "../../lib/slices/cartSlice";
import { useEffect, useState } from "react";
import { useGetProductsByIdQuery } from "../../lib/services/products.service";

function TableRow({cart, handleRemoveItem}) {
  const { isLoading, error, data } = useGetProductsByIdQuery(cart.id)
  
  const subtotal = cart.qty * cart.price

  return error ? (
    <tr>
      <td colSpan={4}>
        Error happened
      </td>
    </tr>
  ) : isLoading ? (
    <tr>
      <td colSpan={4}>
        ...Loading
      </td>
    </tr>
  ) : data ? (
    <tr key={data.data.id} className='border-b border-slate-300'>
      <td className='p-2 text-left flex flex-col space-y-2 md:space-x-2 md:flex-row items-center'>
        <Image 
          alt={data.data.name}
          unoptimized
          src={imageUrl(data.data.image_url)}
          className="object-cover mx-auto h-auto"
          width={60}
          height={60}
        />
        <div>
          <h4>{data.data.name}</h4>
          <button 
            type="button" 
            className='text-green-500 underline'
            onClick={() => handleRemoveItem(data.data.id)}
          >
              Hapus
          </button>
        </div>
      </td>
      <td className='p-2'>
        {rupiahFormater(data.data.price)}
      </td>
      <td className='p-2'>
        <QuantityInput 
          count={cart.qty} 
          increment={() => dispatch(incrementQty({id: cart.id}))} 
          decrement={() => dispatch(decrementQty({id: cart.id}))}
        />
      </td>
      <td className='p-2'>
        {rupiahFormater(subtotal)}
      </td>
    </tr>
  ): null
}

export default function Cart() {
  const cart = useSelector((state) => state.cart.value.items)

  const [subtotal, setSubtotal] = useState(0)

  const dispatch = useDispatch()

  const handleRemoveItem = (id) => {
    dispatch(removeItem({id}))
  }

  useEffect(() => {
    setSubtotal(cart.reduce((prev, next) => prev + (next.price * next.qty) ,0))
  }, [cart])

  return (
    <>
      <Headers />
      <main>
        <div className="px-36 py-24 text-center space-y-6">
          <h3 className="font-bold text-4xl">Keranjang</h3>
          <div>
            <Link href={'/'} className="leading-10 text-green-400 underline">Belanja Lagi</Link>
          </div>
          {cart.length > 0 ? (
            <>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className='text-left'>Product</th>
                    <th>Harga</th>
                    <th>Jumlah</th>
                    <th className='text-right'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length && cart.map(item => TableRow({cart: item, handleRemoveItem}))}
                </tbody>
              </table>
              <div className="flex items-center justify-end space-x-8">
                <div className="text-right">
                  <p className="font-bold">Subtotal: {rupiahFormater(subtotal)}</p>
                  <p className="text-sm text-slate-400">Pajak dan Harga Ongkir belum termasuk</p>
                </div>
                <div>
                  <Link href='/checkout' className="px-4 py-2 bg-green-600 hover:bg-green-800 rounded text-white">Check Out</Link>
                </div>
              </div>
            </>
          ) : (
            <div className='p-16 bg-white rounded shadow'>Keranjang Kosong</div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
