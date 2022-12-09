import Image from "next/image";
import { useContext } from "react";
import { products } from "../helpers/dummy";
import CartContext from "../lib/CartContext";

export default function PaymentDetail() {
  const cartctx = useContext(CartContext)
  const { cart } = cartctx.state
  return (
    <>
      {cart.map(item => {
        const product = products.find(product => product.id = item.product_id)
        return (
          <div className='grid grid-cols-2 gap-4' key={product.id}>
            <div>
              <Image alt='foto' src={product.img} className='object-cover' />
            </div>
            <div>
              <h4>{product.title}</h4>
              <p className='text-green-500'>{rupiahFormater(product.price)}</p>
            </div>
          </div>
        )  
      })}
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
