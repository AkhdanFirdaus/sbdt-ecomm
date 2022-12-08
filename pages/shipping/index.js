import { PaymentLayout } from "../../components/layouts"

export default function Shipping() {
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
      </div>
      <hr className="border-slate-600" />
      <div>
        <h3 className="text-lg font-bold">Shipping Method</h3>
        <div className="space-y-3 mt-4">
          {[0, 1, 2].map(item => {
            return (
              <div key={item} className='flex items-center space-x-2 rounded border px-4 py-2'>
                <input radioGroup="shipping_options" name="shipping_options" type='radio' />
                <label className='flex-grow'>Standard Shipping</label>
                <span className="font-bold">Free</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Shipping.getLayout = function getLayout(page) {
  return (
    <PaymentLayout nextPage='/payment'>
      {page}
    </PaymentLayout>
  )
}
