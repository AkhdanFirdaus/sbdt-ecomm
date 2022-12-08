import Image from 'next/image'
import Link from 'next/link'
import { poppins } from '../helpers/fonts'

import { products } from '../helpers/dummy'
import { rupiahFormater } from '../helpers/formatter'

function Item(data) {
  return (
    <Link href={`/products/${data.id}`} key={data.id} className='shadow bg-white rounded flex flex-col justify-between'>
      <Image alt={data.title} src={data.img} className='object-cover w-full' />
      <div className='p-5'>
        <h5>{data.title}</h5>
        <p className='text-green-500'>{rupiahFormater(data.price)}</p>
      </div>
    </Link>
  )
}

export default function Products() {
  return (
    <div className={`px-36 py-16 ${poppins.className} text-center space-y-8 bg-white`}>
      <div>
        <h3 className='font-bold text-4xl'>Produk</h3>
        <p className='leading-10 text-slate-400'>Beli Merchendise Waifu/Husbando kalian</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {products.map(item => Item(item))}
      </div>
    </div>
  )
}
