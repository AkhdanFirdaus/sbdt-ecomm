import formStyle from '../styles/form.module.css'
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { imageUrl, rupiahFormater } from '../helpers/formatter';
import { useGetProductsQuery } from '../lib/services/products.service';

export default function PaymentDetail() {
  const {isLoading, error, data} = useGetProductsQuery()
  const cart = useSelector((state) => state.cart.value.items)

  return (
    <>
      <div className='overflow-y-auto'>
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <>...Loading</>
      ) : data ? (
        data.items.filter(item => cart.find(c => c.id == item.id)).map(item => {
          return (
            <div className='grid grid-cols-2 gap-4' key={item.id}>
              <div>
                <Image 
                  alt={item.name} 
                  unoptimized
                  src={imageUrl(item.image_url)}
                  width={60}
                  height={60}
                  className='object-cover'
                />
              </div>
              <div>
                <h4>{item.name}</h4>
                <p className='text-green-500'>{rupiahFormater(item.price)}</p>
              </div>
            </div>
          )  
        })
      ) : null}
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
    </>
  )
}

