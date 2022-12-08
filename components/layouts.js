import Image from "next/image";
import Breadcrumb from "./breadcrumb";
import { products } from '../helpers/dummy'
import { rupiahFormater } from '../helpers/formatter'

import formStyle from '../styles/form.module.css'
import Link from "next/link";
import { useRouter } from "next/router";

const logo = require('../public/assets/zeta-ava-1.png').default

export function PaymentLayout({children, nextPage = '/'}) {
  const product = products[0]
  const router = useRouter()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-24 py-16 md:h-screen bg-white space-y-8 overflow-y-auto">
        <div className='flex space-x-4 items-center'>
          <Image alt='logo' src={logo} width={42} height={42} />
          <h3 className='text-2xl'>Zeta</h3>
        </div>
        <Breadcrumb />
        {children}
        {nextPage.includes('result') && (
          <div className='flex justify-between items-center'>
            <div>
              <button type='button' onClick={router.back} className='text-green-600 underline'>Kembali ke Keranjang</button>
            </div>
            <div>
              <Link href={nextPage} className='bg-green-600 hover:bg-green-800 rounded px-4 py-2 text-white'>Menuju ke pengiriman</Link>
            </div>
          </div>
        )}
      </div>
      <div className="px-24 py-16 md:h-screen bg-neutral-300 space-y-6">
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <Image alt='foto' src={product.img} className='object-cover' />
          </div>
          <div>
            <h4>{product.title}</h4>
            <p className='text-green-500'>{rupiahFormater(product.price)}</p>
          </div>
        </div>
        <hr className='border-slate-400' />
        <div className='w-full flex items-center space-x-2'>
          <input type='text' className={`${formStyle.standard} flex-grow`} placeholder='Coupon Code' />
          <button className='bg-slate-500 text-white rounded px-4 py-2 flex-1'>Add code</button>
        </div>
        <hr className='border-slate-400' />
        <div>
          <dl className='grid grid-cols-2'>
            <dd>Subtotal</dd>
            <dt className='text-right'>{rupiahFormater(150000)}</dt>

            <dd>Shipping</dd>
            <dt className='text-right'>Dihitung Setelah ini</dt>
          </dl>
        </div>
        <hr className='border-slate-400' />
          <dl className='grid grid-cols-2'>
            <dd>Total</dd>
            <dt className='text-right font-bold text-lg'>{rupiahFormater(150000)}</dt>
          </dl>
      </div>
    </div>    
  )
}
