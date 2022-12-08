import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";
import Headers from "../../components/header";
import QuantityInput from "../../components/quantityinput";

import { products } from '../../helpers/dummy'
import { rupiahFormater } from "../../helpers/formatter";

export default function Cart() {
  return (
    <>
      <Headers />
      <main>
        <div className="px-36 py-24 text-center space-y-6">
          <h3 className="font-bold text-4xl">Keranjang</h3>
          <div>
            <Link href={'/'} className="leading-10 text-green-400 underline">Belanja Lagi</Link>
          </div>
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
              {products.filter(e => e.id % 4 == 0).map(item => {
                return (
                  <tr key={item.id} className='border-b border-slate-300'>
                    <td className='p-2 text-left flex flex-col space-y-2 md:space-x-2 md:flex-row items-center'>
                      <Image alt={item.title} src={item.img} className='object-cover' />
                      <div>
                        <h4>{item.title}</h4>
                        <button className='text-green-500 underline'>Hapus</button>
                      </div>
                    </td>
                    <td className='p-2'>
                      {rupiahFormater(item.price)}
                    </td>
                    <td className='p-2'>
                      <QuantityInput />
                    </td>
                    <td className='p-2'>
                      {rupiahFormater(item.price)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="flex items-center justify-end space-x-8">
            <div className="text-right">
              <p className="font-bold">Subtotal: {rupiahFormater(150000)}</p>
              <p className="text-sm text-slate-400">Pajak dan Harga Ongkir belum termasuk</p>
            </div>
            <div>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-800 rounded text-white">Check Out</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}