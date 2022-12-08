import Link from 'next/link'
import { PaymentLayout } from '../../components/layouts'

import formStyle from '../../styles/form.module.css'


export default function Checkout() {
  return (
    <main className='space-y-8'>
      <div className='space-y-4'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-2xl'>Contact</h3>
          <p>Do you have account <Link href={'/login'}>Login</Link></p>
        </div>
        <input type='text' placeholder='Email or phone number' className='w-full border rounded px-4 py-2' />
        <div className='flex justify-start space-x-2'>
          <input type='checkbox' />
          <label className='text-sm'>Add me to Candleaf newsletter for a 10% discount</label>
        </div>
      </div>
      <div className='space-y-4'>
        <div>
          <h3 className='font-bold text-2xl'>Shipping Address</h3>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <input type='text' placeholder='First Name' className={formStyle.standard} />
          <input type='text' placeholder='Last Name' className={formStyle.standard} />
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <input type='text' placeholder='Address and number' className={formStyle.standard} />
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <input type='text' placeholder='Shipping note (optional)' className={formStyle.standard} />
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <input type='text' placeholder='City' className={formStyle.standard} />
          <input type='text' placeholder='Postal Code' className={formStyle.standard} />
          <select placeholder='Province' className={formStyle.standard}>
            <option>DKI Jakarta</option>
            <option>Jawa Barat</option>
          </select>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <input type='text' placeholder='Country/Region' className={formStyle.standard} />
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <div className='flex justify-start space-x-2'>
            <input type='checkbox' />
            <label className='text-sm'>Simpan informasi untuk mempercepat pembelian selanjutnya</label>
          </div>
        </div>
      </div>
    </main>
  )
}

Checkout.getLayout = function getLayout(page) {
  return (
    <PaymentLayout nextPage='/shipping'>
      {page}
    </PaymentLayout>
  )
}
