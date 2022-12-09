import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";
import Headers from "../../components/header";
import QuantityInput from "../../components/quantityinput";

import { rupiahFormater } from "../../helpers/formatter";
import useCart from "../../lib/CartHooks";
import useProduct from "../../lib/ProductHooks";

function TableRow(cart) {
  const { removeItem, changeQtyItem, getSubtotalItem, getCartItem } = useCart()
  const { getProduct } = useProduct()

  const item = getProduct(cart.product_id)

  const changeQty = (value) => {
    changeQtyItem(item.id, value)
  }

  if (!item) return <div></div>

  return (
    <tr key={item.id} className='border-b border-slate-300'>
      <td className='p-2 text-left flex flex-col space-y-2 md:space-x-2 md:flex-row items-center'>
        <Image alt={item.title} src={item.img} className='object-cover' />
        <div>
          <h4>{item.title}</h4>
          <button 
            type="button" 
            className='text-green-500 underline'
            onClick={() => removeItem(item.id)}
          >
              Hapus
          </button>
        </div>
      </td>
      <td className='p-2'>
        {rupiahFormater(item.price)}
      </td>
      <td className='p-2'>
        <QuantityInput count={getCartItem(item.id).qty} setCount={changeQty} />
      </td>
      <td className='p-2'>
        {rupiahFormater(getSubtotalItem(item.id))}
      </td>
    </tr>
  )
}

export default function Cart() {
  const { getCart, getSubtotal } = useCart()

  return (
    <>
      <Headers />
      <main>
        <div className="px-36 py-24 text-center space-y-6">
          <h3 className="font-bold text-4xl">Keranjang</h3>
          <div>
            <Link href={'/'} className="leading-10 text-green-400 underline">Belanja Lagi</Link>
          </div>
          {getCart().length > 0 ? (
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
                  {getCart().map(cart => TableRow(cart))}
                </tbody>
              </table>
              <div className="flex items-center justify-end space-x-8">
                <div className="text-right">
                  <p className="font-bold">Subtotal: {rupiahFormater(getSubtotal())}</p>
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
