import Image from 'next/image'
import { poppins } from '../helpers/fonts'

const data = [
  {
    id: 1,
    img: require('../public/assets/image-1-3.png').default,
    title: 'Deskmat Vestia Zeta',
    price: 150000
  },
  {
    id: 2,
    img: require('../public/assets/image-2.png').default,
    title: 'Phone Case Zeta',
    price: 99000
  },
  {
    id: 3,
    img: require('../public/assets/image-3.png').default,
    title: 'Stand Acrylic Vestia Zeta',
    price: 69000
  },
  {
    id: 4,
    img: require('../public/assets/image-4.png').default,
    title: 'Keychain Acrylic Vestia Zeta',
    price: 20000
  },
  {
    id: 5,
    img: require('../public/assets/image-1-2.png').default,
    title: 'Garskin Kartu ATM Vestia Zeta',
    price: 20000
  },
  {
    id: 6,
    img: require('../public/assets/image-1-1.png').default,
    title: 'T-Shirt Vestia Zeta',
    price: 99000
  },
  {
    id: 7,
    img: require('../public/assets/image-5.png').default,
    title: 'Stiker Pack Vestia Zeta',
    price: 25000
  },
  {
    id: 8,
    img: require('../public/assets/image-1.png').default,
    title: 'Dakimakura Vestia Zeta',
    price: 669000
  },
]

function Item(data) {
  return (
    <div key={data.id} className='shadow bg-white rounded flex flex-col justify-between'>
      <Image alt={data.title} src={data.img} className='object-cover w-full' />
      <div className='p-5'>
        <h5>{data.title}</h5>
        <p className='text-green-500'>Rp. {new Intl.NumberFormat('id').format(data.price)}</p>
      </div>
    </div>
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
        {data.map(item => Item(item))}
      </div>
    </div>
  )
}
