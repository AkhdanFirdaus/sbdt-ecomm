import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import zetaava from '../public/assets/zeta-ava-1.png'

import { roboto } from '../helpers/fonts'
import Link from 'next/link'

export default function Headers() {
  return (
    <header className={`bg-white ${roboto.className}`}>
      <nav className='container mx-auto p-4'>
        <ul className='flex justify-between items-center'>
          <li>
            <Image src={zetaava} alt='Brand' width={32} height={32} />
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
              <FontAwesomeIcon icon={faShoppingCart} width={24} height={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
