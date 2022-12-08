import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

const data = [
  {
    id: 1,
    name: 'Larissa',
    avatar: require('../public/assets/bg.png').default,
    message: 'Produk Original Sesuai Deskripsi',
    rate: 4
  },
  {
    id: 2,
    name: 'Didin',
    avatar: require('../public/assets/img-1.png').default,
    message: 'Waifuku Wangy-Wangy',
    rate: 5
  },
  {
    id: 3,
    name: 'Layla',
    avatar: require('../public/assets/img.png').default,
    message: 'Barang Rill bang no fek fek',
    rate: 4
  }
]

function Item(data) {
  return (
    <div key={data.id} className="bg-white rounded p-5 flex flex-col justify-between items-center space-y-3">
      <Image alt={data.name} src={data.avatar} className='object-cover' />
      <div className='flex flex-row space-x-1'>
        {[1, 2, 3, 4, 5].map(i => {
          let color = 'text-green-400'
          if (i > data.rate) color = 'text-green-200'
          return <FontAwesomeIcon key={i} icon={faStar} width={28} height={28} className={color} />
        })}
      </div>
      <p className='text-lg font-medium leading-6'>&quot;{data.message}&quot;</p>
      <span className='text-slate-400 font-light text-sm'>{data.name}</span>
    </div>
  )
}

export default function Testimonials() {
  return (
    <div className="px-36 py-16 text-center space-y-6">
      <h3 className="font-bold text-4xl">Testimoni</h3>
      <p className="leading-10 text-slate-400">Quote dari wibu elitis</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map(item => Item(item))}
      </div>
    </div>
  )
}
