import Link from "next/link"

function ProductsPage() {
  return (
    <>
      <h4>ProductsPage</h4>
      <ul>
        {[1, 2, 3, 4, 5, 6].map(item => {
          return <li key={item}>
            <Link href={`/products/${item}`}>{item}</Link>
          </li>
        })}
      </ul>
    </>
  )
}

export default ProductsPage