import Image from "next/image"

const data = [
  {
    id: 1,
    img: require('../public/assets/image-1-3.png').default,
    title: 'Deskmat Vestia Zeta',
    price: 150000
  },
  {
    id: 8,
    img: require('../public/assets/image-1.png').default,
    title: 'Dakimakura Vestia Zeta',
    price: 669000
  },
  {
    id: 3,
    img: require('../public/assets/image-3.png').default,
    title: 'Stand Acrylic Vestia Zeta',
    price: 69000
  },
  {
    id: 7,
    img: require('../public/assets/image-5.png').default,
    title: 'Stiker Pack Vestia Zeta',
    price: 25000
  }
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

export default function Popular() {
  return (
    <div className="px-36 py-16 text-center space-y-6 bg-white">
      <h3 className="font-bold text-4xl">Popular</h3>
      <p className="leading-10 text-slate-400">Quote dari wibu elitis</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.map(item => Item(item))}
      </div>
    </div>
  )
}
