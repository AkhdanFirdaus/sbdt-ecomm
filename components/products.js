import { poppins } from '../helpers/fonts'
import { useGetProductsQuery } from '../lib/services/products.service'
import ProductItemCard from './product_item_card'


export default function Products() {
  const { data, error, isLoading } = useGetProductsQuery()

  return (
    <div className={`px-36 py-16 ${poppins.className} text-center space-y-8 bg-white`}>
      <div>
        <h3 className='font-bold text-4xl'>Produk</h3>
        <p className='leading-10 text-slate-400'>Beli Merchendise Waifu/Husbando kalian</p>
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
