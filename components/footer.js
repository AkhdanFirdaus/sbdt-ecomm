import Image from 'next/image'
import Link from 'next/link'

import { simonetta } from '../helpers/fonts'

const zeta = require('../public/assets/zeta-ava-1.png').default

const menu = [
  {
    id: 1,
    name: 'Discovery',
    link: ''
  },
  {
    id: 2,
    name: 'New season',
    link: ''
  },
  {
    id: 3,
    name: 'Most searched',
    link: ''
  },
  {
    id: 4,
    name: 'Most selled',
    link: ''
  },
  {
    id: 5,
    name: 'About',
    link: ''
  },
  {
    id: 6,
    name: 'Help',
    link: ''
  },
  {
    id: 7,
    name: 'Shipping',
    link: ''
  },
  {
    id: 8,
    name: 'Affiliate',
    link: ''
  },
  {
    id: 9,
    name: 'Info',
    link: ''
  },
  {
    id: 10,
    name: 'Contact us',
    link: ''
  },
  {
    id: 11,
    name: 'Privacy Policies',
    link: ''
  },
  {
    id: 12,
    name: 'Terms & Conditions',
    link: ''
  },
]

export default function Footer() {
  return (
    <>
      <div className="px-36 py-16 bg-neutral-700 text-white">
        <hr className='mb-6' />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className='space-y-3'>
            <div className='flex items-center space-x-3'>
              <Image alt='Zeta' src={zeta} className='object-cover' /> 
              <span className={`${simonetta} font-bold text-2xl`}>Zeta</span>
            </div>
            <p>Tempat Khilaf dan jajan waifu/husbando</p>
          </div>
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            {menu.map(item => {
              return <Link href="" key={item.id} className={(item.id%4)==1 ? 'text-green-700' : ''}>{item.name}</Link>
            })}
          </div>
        </div>
      </div>
      <footer className="px-36 py-8 flex justify-between bg-neutral-100">
        <span>&copy;Zeta All Rights Reserved.</span>
        <span>Designed with ❤️ by Rilo</span>
      </footer> 
    </>
  )
}
