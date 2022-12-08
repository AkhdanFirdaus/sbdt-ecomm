import { useState } from "react"

export default function QuantityInput({count, setCount}) {
  return (
    <div className="flex items-center space-x-2">
      <button className="border px-2 py-1" onClick={() => setCount(count + 1)}>+</button>
      <div>{count}</div>
      <button className="border px-2 py-1" onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}
