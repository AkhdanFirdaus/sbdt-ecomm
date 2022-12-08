import { faCreditCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PaymentLayout } from "../../components/layouts"
import formStyle from '../../styles/form.module.css'

export default function Payment() {
  return (
    <div className="space-y-8">
      <div className="border border-slate-300 rounded p-5 space-y-4">
        <div className="flex justify-between items-center">
          <p>Contact <span className="font-bold">joe.spagnuolo@uxbly.com</span></p>
          <button type="button" className="text-green-600 underline">Edit</button>
        </div>
        <hr className="border border-slate-300 " />
        <div className="flex justify-between items-center">
          <p>Ship to <span className="font-bold">Via Firenze 23, 92023, Campobello di  Licata AG, Italia</span></p>
          <button type="button" className="text-green-600 underline">Edit</button>
        </div>
        <hr className="border border-slate-300 " />
        <div className="flex justify-between items-center">
          <p>Method <span className="font-bold">Standard Shipping - FREE</span></p>
          <button type="button" className="text-green-600 underline">Edit</button>
        </div>
      </div>
      <hr className="border-slate-600" />
      <div>
        <h3 className="text-lg font-bold">Payment method</h3>
        <div className="rounded shadow">
          <div className="flex items-center px-4 py-2 space-x-3 bg-green-600 text-white">
            <FontAwesomeIcon icon={faCreditCard} />
            <p>Credit Card</p>
          </div>
          <div className="p-5 grid gap-4 grid-cols-1">
            <input type='text' placeholder='Card Number' className={`${formStyle.standard}`} />
            <input type='text' placeholder='PEC (optional)' className={`${formStyle.standard}`} />
            <input type='text' placeholder='Expiration (MM/YY)' className={`${formStyle.standard}`} />
            <input type='text' placeholder='CVV' className={`${formStyle.standard}`} />
          </div>
        </div>
      </div>
      <hr className="border-slate-600" />
      <div>
        <h3 className="text-lg font-bold">Tax Informations</h3>
        <div className="space-y-3 mt-4">
          <input type='text' placeholder='VAT number  (optional)' className={`${formStyle.standard} w-full`} />
          <input type='text' placeholder='PEC (optional)' className={`${formStyle.standard} w-full`} />
        </div>
      </div>
      <hr className="border-slate-600" />
      <div>
        <h3 className="text-lg font-bold">Billing Address Method</h3>
        <div className="space-y-3 mt-4">
          {['Same as the shipping address', 'Use a different address for billing'].map(item => {
            return (
              <div key={item} className='flex items-center space-x-2 rounded border px-4 py-2'>
                <input radioGroup="billing_address" name="billing_address" type='radio' />
                <label className='flex-grow'>{item}</label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Payment.getLayout = function getLayout(page) {
  return (
    <PaymentLayout nextPage='/payment/result'>
      {page}
    </PaymentLayout>
  )
}
