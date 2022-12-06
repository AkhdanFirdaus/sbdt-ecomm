import Image from 'next/image'
import bg from '../public/assets/bg-image.png'
import zetaava from '../public/assets/zeta-ava-1.png'

import { abyssinica, roboto } from '../helpers/fonts'

export default function Banner() {
  return (
    <section className='relative'>
      <Image src={bg} alt='Background' />
      <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center'>
        <div className='w-1/3 backdrop-blur bg-white/70 rounded py-5 px-16 flex flex-col items-center text-center space-y-3'>
          <Image src={zetaava} alt='brand' width={42} height={42} />
          <h2 className='text-4xl'>Zeta</h2>
          <p className={`leading-6 ${abyssinica.className}`}>Zeta adalah tempat untuk menyalurkan hasrat wibu dan khilaf dengan produk original</p>
          <button role='button' className={`bg-slate-700 text-white py-2 px-6 rounded ${roboto.className}`}>Cari merchandise dan berhala</button>
        </div>
      </div>
    </section>
  )
}