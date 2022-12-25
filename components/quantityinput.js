export default function QuantityInput({count, increment, decrement}) {
  return (
    <div className="flex items-center space-x-2">
      <button className="border px-2 py-1" onClick={decrement}>-</button>
      <div>{count}</div>
      <button className="border px-2 py-1" onClick={increment}>+</button>
    </div>
  )
}
