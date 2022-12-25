import Image from "next/image";
import Breadcrumb from "./breadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";
import PaymentDetail from "./payment-detail";
import Footer from "./footer";
import Headers from "./header";

const logo = require('../public/assets/zeta-ava-1.png').default

export function PaymentLayout({children, nextPage = '/'}) {
  const router = useRouter()
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-24 py-16 md:h-screen bg-white space-y-8 overflow-y-auto">
          <div className='flex space-x-4 items-center'>
            <Image alt='logo' src={logo} width={42} height={42} />
            <h3 className='text-2xl'>Zeta</h3>
          </div>
          <Breadcrumb />
          {children}
          {/* {nextPage.includes('result') && ( */}
            <div className='flex justify-between items-center'>
              <div>
                <button type='button' onClick={router.back} className='text-green-600 underline'>Kembali ke Keranjang</button>
              </div>
              <div>
                <Link href={nextPage} className='bg-green-600 hover:bg-green-800 rounded px-4 py-2 text-white'>Menuju ke pengiriman</Link>
              </div>
            </div>
          {/* )} */}
        </div>
        <div className="px-24 py-16 md:h-screen bg-neutral-300 space-y-6">
          <PaymentDetail />
        </div>
      </div> 
    </DefaultLayout>   
  )
}

export function DefaultLayout({children}) {
  return (
    <>
      <Headers />
      {children}
      <Footer />
    </>
  )
}
