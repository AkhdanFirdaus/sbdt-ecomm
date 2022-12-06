import { useRouter } from "next/router"

function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>Product {id}</>
  )
}

export default ProductPage