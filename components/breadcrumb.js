export default function Breadcrumb() {
  return (
    <nav>
      <ul className='flex justify-start items-center space-x-3'>
        <li className='text-green-600'>Cart</li>
        <li className='font-bold'>Details</li>
        <li>Shipping</li>
        <li>Payment</li>
      </ul>
    </nav>
  )
}
