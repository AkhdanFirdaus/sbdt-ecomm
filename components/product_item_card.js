import Image from "next/image";
import Link from "next/link";
import { imageUrl, rupiahFormater } from "../helpers/formatter";

export default function ProductItemCard(data) {
  return (
    <Link href={`/products/${data.id}`} key={data.id} className='shadow bg-white rounded flex flex-col justify-between'>
      <Image 
        alt={data.name} 
        unoptimized
        src={imageUrl(data.image_url)} 
        className='object-cover w-full' 
        width={200} 
        height={200} 
      />
      <div className='p-5'>
        <h5>{data.name}</h5>
        <p className='text-green-500'>{rupiahFormater(data.price)}</p>
      </div>
    </Link>
  )
}
