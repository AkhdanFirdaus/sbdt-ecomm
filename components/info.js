import Image from 'next/image'

const zeta = require('../public/assets/zeta-1.png').default

export default function Info() {
  return (
    <div className="px-36 py-16 bg-neutral-100">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          <h3 className="font-bold text-4xl">Karakter Wangy-Wangy Berkualitas</h3>
          <p className="leading-10 text-slate-400">Dibuat dengan kasih sayang </p>
          <ul className="space-y-3 list-disc list-inside">
            <li>Kolaborasi resmi dengan karakter</li>
            <li>Dibuat dengan bahan berkualitas</li>
            <li>Pengiriman Internasional</li>
            <li>Banyak pilihan pembayaran</li>
          </ul>
          <button className="bg-gray-700 hover:bg-gray-500 ease-in text-white px-6 py-2 rounded">Learn More</button>
        </div>
        <div>
          <div className='flex items-center justify-center'>
            <Image alt='Zeta' src={zeta} className='object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}
