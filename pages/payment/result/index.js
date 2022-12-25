import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { PaymentLayout } from "../../../components/layouts"

export default function Result() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <FontAwesomeIcon icon={faCheckCircle} className='text-green-600' width={40} />
      <h3>Pembayaran Sudah Dikonfirmasi</h3>
      <h6 className="text-green-600 font-bold">Order #321123</h6>
      <p className="leading-8 text-center">Terima kasih sudah berbelanja di Zeta. Produk dikonfirmasi akan siap dikirimkan maksimal 2 hari kerja. Silahkan cek pesan masuk untuk info lebih lengkap</p>
      <div className="d-flex justify-center space-x-3">
        <Link href='/' className="text-green-600 underline">Kembali Belanja</Link>
        <button className="rounded px-4 py-2 text-white bg-green-600 hover:bg-green-800">Print Receipt</button>
      </div>
    </div>
  )
}

Result.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}
