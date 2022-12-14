import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import zetaava from '../public/assets/zeta-ava-1.png'

import { useSelector } from 'react-redux'
import { roboto } from '../helpers/fonts'
import Link from 'next/link'

export default function Headers() {
  const cartCount = useSelector((state) => state.cart.value.items).length
  return (
    <header className={`bg-white ${roboto.className}`}>
      <nav className='container mx-auto p-4'>
        <ul className='flex justify-between items-center'>
          <li>
            <Link href='/'>
              <Image src={zetaava} alt='Brand' />
            </Link>
          </li>
          <li>Discovery</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>
            <input type='text' className='bg-slate-50 px-3 py-1 rounded' />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} width={24} height={24} />
          </li>
          <li>
            <Link href={'/cart'}>
              <div className='relative'>
                <FontAwesomeIcon icon={faShoppingCart} width={24} height={24} />
                <div className='absolute top-0 right-0'>
                  <span className='bg-slate-700 text-white rounded-full font-bold text-xs'>{cartCount}</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
