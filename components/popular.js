import { useGetProductsQuery } from "../lib/services/products.service"
import ProductItemCard from "./product_item_card"

export default function Popular() {
  const { data, error, isLoading } = useGetProductsQuery()
  
  return (
    <div className="px-36 py-16 text-center space-y-6 bg-white">
      <div>
        <h3 className="font-bold text-4xl">Popular</h3>
        <p className="leading-10 text-slate-400">Quote dari wibu elitis</p>
      </div>
      <div>
        {error ? (
          <>Error happened</>
        ) : isLoading ? (
          <>...Loading</>
        ) : data ? (
          <>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              {data.items.map(item => ProductItemCard(item))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}
